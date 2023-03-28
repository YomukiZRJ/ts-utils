import { expectType } from 'tsd'

const test = (a: string, b: number) => a + b
type Test = typeof test
type Test2 = () => void
type FuncFoo = (arg: number) => void;
type FuncBar = (...args: string[]) => void;
type FuncBaz = (arg1: string, arg2: boolean) => void;

type FunctionFirstArgumentTest = FunctionFirstArgument<Test> // string
type FunctionFirstArgumentTest2 = FunctionFirstArgument<Test2> // unknown

type FunctionLastArgumentTest = FunctionLastArgument<Test> // number
type FunctionLastArgumentTest2 = FunctionLastArgument<FuncFoo> // number
type FunctionLastArgumentTest3 = FunctionLastArgument<FuncBar> // string
type FunctionLastArgumentTest4 = FunctionLastArgument<FuncBaz> // boolean
type FunctionLastArgumentTest5 = FunctionLastArgument<Test2> // unknown
