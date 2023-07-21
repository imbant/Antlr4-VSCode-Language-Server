// Generated from grammars/MaoParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SourceFileContext } from "./MaoParser";
import { SourceDeclContext } from "./MaoParser";
import { DefineVariableContext } from "./MaoParser";
import { VariableModifyContext } from "./MaoParser";
import { TypeContext } from "./MaoParser";
import { ExpressionValueContext } from "./MaoParser";
import { ExpressionContext } from "./MaoParser";
import { CallFunctionContext } from "./MaoParser";
import { EosContext } from "./MaoParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MaoParser`.
 */
export interface MaoParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MaoParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	enterSourceFile?: (ctx: SourceFileContext) => void;
	/**
	 * Exit a parse tree produced by `MaoParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	exitSourceFile?: (ctx: SourceFileContext) => void;

	/**
	 * Enter a parse tree produced by `MaoParser.sourceDecl`.
	 * @param ctx the parse tree
	 */
	enterSourceDecl?: (ctx: SourceDeclContext) => void;
	/**
	 * Exit a parse tree produced by `MaoParser.sourceDecl`.
	 * @param ctx the parse tree
	 */
	exitSourceDecl?: (ctx: SourceDeclContext) => void;

	/**
	 * Enter a parse tree produced by `MaoParser.defineVariable`.
	 * @param ctx the parse tree
	 */
	enterDefineVariable?: (ctx: DefineVariableContext) => void;
	/**
	 * Exit a parse tree produced by `MaoParser.defineVariable`.
	 * @param ctx the parse tree
	 */
	exitDefineVariable?: (ctx: DefineVariableContext) => void;

	/**
	 * Enter a parse tree produced by `MaoParser.variableModify`.
	 * @param ctx the parse tree
	 */
	enterVariableModify?: (ctx: VariableModifyContext) => void;
	/**
	 * Exit a parse tree produced by `MaoParser.variableModify`.
	 * @param ctx the parse tree
	 */
	exitVariableModify?: (ctx: VariableModifyContext) => void;

	/**
	 * Enter a parse tree produced by `MaoParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `MaoParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `MaoParser.expressionValue`.
	 * @param ctx the parse tree
	 */
	enterExpressionValue?: (ctx: ExpressionValueContext) => void;
	/**
	 * Exit a parse tree produced by `MaoParser.expressionValue`.
	 * @param ctx the parse tree
	 */
	exitExpressionValue?: (ctx: ExpressionValueContext) => void;

	/**
	 * Enter a parse tree produced by `MaoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MaoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MaoParser.callFunction`.
	 * @param ctx the parse tree
	 */
	enterCallFunction?: (ctx: CallFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `MaoParser.callFunction`.
	 * @param ctx the parse tree
	 */
	exitCallFunction?: (ctx: CallFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `MaoParser.eos`.
	 * @param ctx the parse tree
	 */
	enterEos?: (ctx: EosContext) => void;
	/**
	 * Exit a parse tree produced by `MaoParser.eos`.
	 * @param ctx the parse tree
	 */
	exitEos?: (ctx: EosContext) => void;
}

