parser grammar MaoParser;

options {
	tokenVocab = MaoLexer;
}

sourceFile: sourceDecl eos EOF;

sourceDecl: ( defineVariable eos | callFunction eos)*;

defineVariable:
	variable_type = type variable_name = IDENTIFIER EQUALS expression;

variableModify: IDENTIFIER EQUALS expression;

type: INT | DOUBLE;

expressionValue: (PLUS | MINUS)? (
		INT_LITERAL
		| DOUBLE_LITERAL
		| IDENTIFIER
	);

expression:
	expressionValue ((PLUS | MINUS | MULT | DIV) expression)?;

callFunction:
	function_name = IDENTIFIER LPAREN expression RPAREN;

eos: SEMI | EOF;