import {
    DefineVariableContext,
    ExpressionContext,
    CallFunctionContext,
    ExpressionValueContext,
} from "../../../parser/MaoParser";
import { MaoParserListener } from "../../../parser/MaoParserListener";

interface IVariable {
    value: number;
    type: VariableType;
}

type VariableType = "int" | "double";

export default class RunListener implements MaoParserListener {
    constructor(private printOutput: number[]) {}

    private variables: Map<string, IVariable> = new Map();

    private parseExpressionValue(valueCtx: ExpressionValueContext): number {
        const coefficient = valueCtx.MINUS()?.text ? -1 : 1;
        const intLiteral = valueCtx.INT_LITERAL();
        const doubleLiteral = valueCtx.DOUBLE_LITERAL();
        if (intLiteral || doubleLiteral) {
            return (
                parseInt(intLiteral?.text || doubleLiteral?.text!) * coefficient
            );
        }
        const variableName = valueCtx.IDENTIFIER();
        if (variableName) {
            const variable = this.variables.get(variableName.text!);
            if (variable) {
                return variable.value * coefficient;
            } else {
                // error
            }
        }
        return 0;
    }

    // TODO: 逆波兰表达式，语法分析是自上而下的，需要用语义处理优先级
    private parseExpression(ctx: ExpressionContext): number {
        const valueCtx = ctx.expressionValue();
        const expressionValue = this.parseExpressionValue(valueCtx);
        const expressionCtx = ctx.expression();
        if (!expressionCtx) {
            return expressionValue;
        } else {
            const result = this.parseExpression(expressionCtx);
            if (ctx.PLUS()) {
                return expressionValue + result;
            } else if (ctx.MINUS()) {
                return expressionValue - result;
            } else if (ctx.MULT()) {
                return expressionValue * result;
            } else if (ctx.DIV()) {
                return expressionValue / result;
            }
            return 0;
        }
    }

    public clear(): void {
        this.variables.clear();
    }

    enterDefineVariable(ctx: DefineVariableContext): void {
        const type = ctx._variable_type.text as VariableType;
        const value = this.parseExpression(ctx.expression());
        const name = ctx._variable_name.text!;

        this.variables.set(name, { type, value });
    }

    enterCallFunction(ctx: CallFunctionContext): void {
        if (ctx._function_name.text === "print") {
            const value = this.parseExpression(ctx.expression());
            this.printOutput.push(value);
        }
    }
}
