// Generated from grammars/MaoParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MaoParserListener } from "./MaoParserListener";
import { MaoParserVisitor } from "./MaoParserVisitor";


export class MaoParser extends Parser {
	public static readonly INT = 1;
	public static readonly DOUBLE = 2;
	public static readonly PLUS = 3;
	public static readonly MINUS = 4;
	public static readonly MULT = 5;
	public static readonly DIV = 6;
	public static readonly EQUALS = 7;
	public static readonly LPAREN = 8;
	public static readonly RPAREN = 9;
	public static readonly SEMI = 10;
	public static readonly INT_LITERAL = 11;
	public static readonly DOUBLE_LITERAL = 12;
	public static readonly IDENTIFIER = 13;
	public static readonly PRINT = 14;
	public static readonly WS = 15;
	public static readonly COMMENT = 16;
	public static readonly TERMINATOR = 17;
	public static readonly LINE_COMMENT = 18;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_sourceDecl = 1;
	public static readonly RULE_defineVariable = 2;
	public static readonly RULE_variableModify = 3;
	public static readonly RULE_type = 4;
	public static readonly RULE_expressionValue = 5;
	public static readonly RULE_expression = 6;
	public static readonly RULE_callFunction = 7;
	public static readonly RULE_eos = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "sourceDecl", "defineVariable", "variableModify", "type", 
		"expressionValue", "expression", "callFunction", "eos",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'int'", "'double'", "'+'", "'-'", "'*'", "'/'", "'='", "'('", 
		"')'", "';'", undefined, undefined, undefined, "'print'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INT", "DOUBLE", "PLUS", "MINUS", "MULT", "DIV", "EQUALS", 
		"LPAREN", "RPAREN", "SEMI", "INT_LITERAL", "DOUBLE_LITERAL", "IDENTIFIER", 
		"PRINT", "WS", "COMMENT", "TERMINATOR", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MaoParser._LITERAL_NAMES, MaoParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MaoParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MaoParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return MaoParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MaoParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MaoParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceFile(): SourceFileContext {
		let _localctx: SourceFileContext = new SourceFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MaoParser.RULE_sourceFile);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this.sourceDecl();
			this.state = 19;
			this.eos();
			this.state = 20;
			this.match(MaoParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceDecl(): SourceDeclContext {
		let _localctx: SourceDeclContext = new SourceDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MaoParser.RULE_sourceDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 30;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MaoParser.INT) | (1 << MaoParser.DOUBLE) | (1 << MaoParser.IDENTIFIER))) !== 0)) {
				{
				this.state = 28;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MaoParser.INT:
				case MaoParser.DOUBLE:
					{
					this.state = 22;
					this.defineVariable();
					this.state = 23;
					this.eos();
					}
					break;
				case MaoParser.IDENTIFIER:
					{
					this.state = 25;
					this.callFunction();
					this.state = 26;
					this.eos();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 32;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defineVariable(): DefineVariableContext {
		let _localctx: DefineVariableContext = new DefineVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MaoParser.RULE_defineVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			_localctx._variable_type = this.type();
			this.state = 34;
			_localctx._variable_name = this.match(MaoParser.IDENTIFIER);
			this.state = 35;
			this.match(MaoParser.EQUALS);
			this.state = 36;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableModify(): VariableModifyContext {
		let _localctx: VariableModifyContext = new VariableModifyContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MaoParser.RULE_variableModify);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.match(MaoParser.IDENTIFIER);
			this.state = 39;
			this.match(MaoParser.EQUALS);
			this.state = 40;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, MaoParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			_la = this._input.LA(1);
			if (!(_la === MaoParser.INT || _la === MaoParser.DOUBLE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionValue(): ExpressionValueContext {
		let _localctx: ExpressionValueContext = new ExpressionValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MaoParser.RULE_expressionValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MaoParser.PLUS || _la === MaoParser.MINUS) {
				{
				this.state = 44;
				_la = this._input.LA(1);
				if (!(_la === MaoParser.PLUS || _la === MaoParser.MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 47;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MaoParser.INT_LITERAL) | (1 << MaoParser.DOUBLE_LITERAL) | (1 << MaoParser.IDENTIFIER))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MaoParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.expressionValue();
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MaoParser.PLUS) | (1 << MaoParser.MINUS) | (1 << MaoParser.MULT) | (1 << MaoParser.DIV))) !== 0)) {
				{
				this.state = 50;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MaoParser.PLUS) | (1 << MaoParser.MINUS) | (1 << MaoParser.MULT) | (1 << MaoParser.DIV))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 51;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callFunction(): CallFunctionContext {
		let _localctx: CallFunctionContext = new CallFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, MaoParser.RULE_callFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			_localctx._function_name = this.match(MaoParser.IDENTIFIER);
			this.state = 55;
			this.match(MaoParser.LPAREN);
			this.state = 56;
			this.expression();
			this.state = 57;
			this.match(MaoParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eos(): EosContext {
		let _localctx: EosContext = new EosContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MaoParser.RULE_eos);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			_la = this._input.LA(1);
			if (!(_la === MaoParser.EOF || _la === MaoParser.SEMI)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14@\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x1F\n\x03\f\x03\x0E" +
		"\x03\"\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x07\x05\x070\n\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x05\b7\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x02\x02\x02\v\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x02\x07\x03\x02\x03\x04\x03\x02\x05\x06\x03\x02\r\x0F\x03" +
		"\x02\x05\b\x03\x03\f\f\x02:\x02\x14\x03\x02\x02\x02\x04 \x03\x02\x02\x02" +
		"\x06#\x03\x02\x02\x02\b(\x03\x02\x02\x02\n,\x03\x02\x02\x02\f/\x03\x02" +
		"\x02\x02\x0E3\x03\x02\x02\x02\x108\x03\x02\x02\x02\x12=\x03\x02\x02\x02" +
		"\x14\x15\x05\x04\x03\x02\x15\x16\x05\x12\n\x02\x16\x17\x07\x02\x02\x03" +
		"\x17\x03\x03\x02\x02\x02\x18\x19\x05\x06\x04\x02\x19\x1A\x05\x12\n\x02" +
		"\x1A\x1F\x03\x02\x02\x02\x1B\x1C\x05\x10\t\x02\x1C\x1D\x05\x12\n\x02\x1D" +
		"\x1F\x03\x02\x02\x02\x1E\x18\x03\x02\x02\x02\x1E\x1B\x03\x02\x02\x02\x1F" +
		"\"\x03\x02\x02\x02 \x1E\x03\x02\x02\x02 !\x03\x02\x02\x02!\x05\x03\x02" +
		"\x02\x02\" \x03\x02\x02\x02#$\x05\n\x06\x02$%\x07\x0F\x02\x02%&\x07\t" +
		"\x02\x02&\'\x05\x0E\b\x02\'\x07\x03\x02\x02\x02()\x07\x0F\x02\x02)*\x07" +
		"\t\x02\x02*+\x05\x0E\b\x02+\t\x03\x02\x02\x02,-\t\x02\x02\x02-\v\x03\x02" +
		"\x02\x02.0\t\x03\x02\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03\x02" +
		"\x02\x0212\t\x04\x02\x022\r\x03\x02\x02\x0236\x05\f\x07\x0245\t\x05\x02" +
		"\x0257\x05\x0E\b\x0264\x03\x02\x02\x0267\x03\x02\x02\x027\x0F\x03\x02" +
		"\x02\x0289\x07\x0F\x02\x029:\x07\n\x02\x02:;\x05\x0E\b\x02;<\x07\v\x02" +
		"\x02<\x11\x03\x02\x02\x02=>\t\x06\x02\x02>\x13\x03\x02\x02\x02\x06\x1E" +
		" /6";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MaoParser.__ATN) {
			MaoParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MaoParser._serializedATN));
		}

		return MaoParser.__ATN;
	}

}

export class SourceFileContext extends ParserRuleContext {
	public sourceDecl(): SourceDeclContext {
		return this.getRuleContext(0, SourceDeclContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public EOF(): TerminalNode { return this.getToken(MaoParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MaoParser.RULE_sourceFile; }
	// @Override
	public enterRule(listener: MaoParserListener): void {
		if (listener.enterSourceFile) {
			listener.enterSourceFile(this);
		}
	}
	// @Override
	public exitRule(listener: MaoParserListener): void {
		if (listener.exitSourceFile) {
			listener.exitSourceFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MaoParserVisitor<Result>): Result {
		if (visitor.visitSourceFile) {
			return visitor.visitSourceFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceDeclContext extends ParserRuleContext {
	public defineVariable(): DefineVariableContext[];
	public defineVariable(i: number): DefineVariableContext;
	public defineVariable(i?: number): DefineVariableContext | DefineVariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefineVariableContext);
		} else {
			return this.getRuleContext(i, DefineVariableContext);
		}
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	public callFunction(): CallFunctionContext[];
	public callFunction(i: number): CallFunctionContext;
	public callFunction(i?: number): CallFunctionContext | CallFunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CallFunctionContext);
		} else {
			return this.getRuleContext(i, CallFunctionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MaoParser.RULE_sourceDecl; }
	// @Override
	public enterRule(listener: MaoParserListener): void {
		if (listener.enterSourceDecl) {
			listener.enterSourceDecl(this);
		}
	}
	// @Override
	public exitRule(listener: MaoParserListener): void {
		if (listener.exitSourceDecl) {
			listener.exitSourceDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MaoParserVisitor<Result>): Result {
		if (visitor.visitSourceDecl) {
			return visitor.visitSourceDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefineVariableContext extends ParserRuleContext {
	public _variable_type!: TypeContext;
	public _variable_name!: Token;
	public EQUALS(): TerminalNode { return this.getToken(MaoParser.EQUALS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(MaoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MaoParser.RULE_defineVariable; }
	// @Override
	public enterRule(listener: MaoParserListener): void {
		if (listener.enterDefineVariable) {
			listener.enterDefineVariable(this);
		}
	}
	// @Override
	public exitRule(listener: MaoParserListener): void {
		if (listener.exitDefineVariable) {
			listener.exitDefineVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MaoParserVisitor<Result>): Result {
		if (visitor.visitDefineVariable) {
			return visitor.visitDefineVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableModifyContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(MaoParser.IDENTIFIER, 0); }
	public EQUALS(): TerminalNode { return this.getToken(MaoParser.EQUALS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MaoParser.RULE_variableModify; }
	// @Override
	public enterRule(listener: MaoParserListener): void {
		if (listener.enterVariableModify) {
			listener.enterVariableModify(this);
		}
	}
	// @Override
	public exitRule(listener: MaoParserListener): void {
		if (listener.exitVariableModify) {
			listener.exitVariableModify(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MaoParserVisitor<Result>): Result {
		if (visitor.visitVariableModify) {
			return visitor.visitVariableModify(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(MaoParser.INT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(MaoParser.DOUBLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MaoParser.RULE_type; }
	// @Override
	public enterRule(listener: MaoParserListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: MaoParserListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MaoParserVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionValueContext extends ParserRuleContext {
	public INT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(MaoParser.INT_LITERAL, 0); }
	public DOUBLE_LITERAL(): TerminalNode | undefined { return this.tryGetToken(MaoParser.DOUBLE_LITERAL, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(MaoParser.IDENTIFIER, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(MaoParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(MaoParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MaoParser.RULE_expressionValue; }
	// @Override
	public enterRule(listener: MaoParserListener): void {
		if (listener.enterExpressionValue) {
			listener.enterExpressionValue(this);
		}
	}
	// @Override
	public exitRule(listener: MaoParserListener): void {
		if (listener.exitExpressionValue) {
			listener.exitExpressionValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MaoParserVisitor<Result>): Result {
		if (visitor.visitExpressionValue) {
			return visitor.visitExpressionValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public expressionValue(): ExpressionValueContext {
		return this.getRuleContext(0, ExpressionValueContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(MaoParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(MaoParser.MINUS, 0); }
	public MULT(): TerminalNode | undefined { return this.tryGetToken(MaoParser.MULT, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(MaoParser.DIV, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MaoParser.RULE_expression; }
	// @Override
	public enterRule(listener: MaoParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MaoParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MaoParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallFunctionContext extends ParserRuleContext {
	public _function_name!: Token;
	public LPAREN(): TerminalNode { return this.getToken(MaoParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(MaoParser.RPAREN, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(MaoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MaoParser.RULE_callFunction; }
	// @Override
	public enterRule(listener: MaoParserListener): void {
		if (listener.enterCallFunction) {
			listener.enterCallFunction(this);
		}
	}
	// @Override
	public exitRule(listener: MaoParserListener): void {
		if (listener.exitCallFunction) {
			listener.exitCallFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MaoParserVisitor<Result>): Result {
		if (visitor.visitCallFunction) {
			return visitor.visitCallFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EosContext extends ParserRuleContext {
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(MaoParser.SEMI, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(MaoParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MaoParser.RULE_eos; }
	// @Override
	public enterRule(listener: MaoParserListener): void {
		if (listener.enterEos) {
			listener.enterEos(this);
		}
	}
	// @Override
	public exitRule(listener: MaoParserListener): void {
		if (listener.exitEos) {
			listener.exitEos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MaoParserVisitor<Result>): Result {
		if (visitor.visitEos) {
			return visitor.visitEos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


