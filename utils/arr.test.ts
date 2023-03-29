import { expectType } from 'tsd'
type JoinTest = Arr.Join<['Zeng', 'Shuai', 'Yomuki'], '-'> // 'Zeng-Shuai-Yomuki'
type JoinTest2 = Arr.Join<['Zeng', 'Shuai', 'Yomuki'], ''> // 'ZengShuaiYomuki'
type JoinTest3 = Arr.Join<[''], ''> // ''
