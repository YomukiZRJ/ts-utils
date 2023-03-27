import { expectType } from 'tsd'

type StrictConditionalTest = StrictConditional<1 | 2, 1 | 2 | 3, true, false>
expectType<StrictConditionalTest>(false)
