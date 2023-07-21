lexer grammar MaoLexer;

// keywords
INT: 'int';
DOUBLE: 'double';

// operators
PLUS: '+';
MINUS: '-';
MULT: '*';
DIV: '/';
EQUALS: '=';

// pairs
LPAREN: '(';
RPAREN: ')';
SEMI: ';';

// literals
INT_LITERAL: [0-9]+;
DOUBLE_LITERAL: [0-9]+ '.' [0-9]+;

// identifiers
IDENTIFIER: [a-zA-Z]+ [a-zA-Z0-9]*;

// function name
PRINT: 'print';

// Hidden tokens
WS                     : [ \t]+             -> channel(HIDDEN);
COMMENT                : '/*' .*? '*/'      -> channel(HIDDEN);
TERMINATOR             : [\r\n]+            -> channel(HIDDEN);
LINE_COMMENT           : '//' ~[\r\n]*      -> channel(HIDDEN);
