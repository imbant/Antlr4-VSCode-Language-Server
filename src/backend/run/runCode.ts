import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker, ParseTree, TerminalNode } from "antlr4ts/tree";
import RunListener from "../listener/runListener/runListener";
import { MaoLexer } from "../../parser/MaoLexer";
import { MaoParser } from "../../parser/MaoParser";

export default class RunCode {
    public run(sourceCode: string) {
        const input = CharStreams.fromString(sourceCode);
        const lexer = new MaoLexer(input);
        const tokenStream = new CommonTokenStream(lexer);

        const parser = new MaoParser(tokenStream);

        const tree = parser.sourceFile();

        const runResult: number[] = [];
        const listener = new RunListener(runResult);

        // @ts-ignore
        ParseTreeWalker.DEFAULT.walk(listener, tree);

        console.log(runResult);
        return runResult;
    }
}
