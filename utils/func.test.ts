import { expectType } from 'tsd'

const test = (a: string, b: number) => a + b
type Test = typeof test
type Test2 = () => void
type FuncFoo = (arg: number) => void;
type FuncBar = (...args: string[]) => void;
type FuncBaz = (arg1: string, arg2: boolean) => void;

type FunctionFirstArgumentTest = Func.FirstArgument<Test> // string
type FunctionFirstArgumentTest2 = Func.FirstArgument<Test2> // unknown

type FunctionLastArgumentTest = Func.LastArgument<Test> // number
type FunctionLastArgumentTest2 = Func.LastArgument<FuncFoo> // number
type FunctionLastArgumentTest3 = Func.LastArgument<FuncBar> // string
type FunctionLastArgumentTest4 = Func.LastArgument<FuncBaz> // boolean
type FunctionLastArgumentTest5 = Func.LastArgument<Test2> // unknown
