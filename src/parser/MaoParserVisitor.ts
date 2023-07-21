// Generated from grammars/MaoParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MaoParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MaoParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `MaoParser.sourceFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceFile?: (ctx: SourceFileContext) => Result;

	/**
	 * Visit a parse tree produced by `MaoParser.sourceDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceDecl?: (ctx: SourceDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `MaoParser.defineVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefineVariable?: (ctx: DefineVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `MaoParser.variableModify`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModify?: (ctx: VariableModifyContext) => Result;

	/**
	 * Visit a parse tree produced by `MaoParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `MaoParser.expressionValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionValue?: (ctx: ExpressionValueContext) => Result;

	/**
	 * Visit a parse tree produced by `MaoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MaoParser.callFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallFunction?: (ctx: CallFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `MaoParser.eos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEos?: (ctx: EosContext) => Result;
}

