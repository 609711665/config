

var imagePrefix = "http://127.0.0.1/project/dou/api/"

// 书籍模块:
// 	书籍列表:	
//参数1: keyword=自由
var bookListUrl = "http://127.0.0.1/project/dou/api/index.php?m=book&a=list"
// 	书籍详情:
//参数1: &id=100000
var bookDetailUrl = "http://127.0.0.1/project/dou/api/index.php?m=book&a=detail"

// 音乐模块:
// 	书籍列表:	
//参数1: keyword=自由
var musicListUrl = "http://127.0.0.1/project/dou/api/index.php?m=music&a=list"
// 	书籍详情:
//参数1: &id=300000
var musicDetailUrl = "http://127.0.0.1/project/dou/api/index.php?m=music&a=detail"

// 影视模块:
// 	书籍列表:	
//参数1: keyword=自由
var filmListUrl = "http://127.0.0.1/project/dou/api/index.php?m=film&a=list"
// 	书籍详情:
//参数1: &id=200000
var filmDetailUrl = "http://127.0.0.1/project/dou/api/index.php?m=film&a=detail"


//es6 导出
var dict = {
    imagePrefix,
    bookListUrl,
    bookDetailUrl,
    musicListUrl,
    musicDetailUrl,
    filmListUrl,
    filmDetailUrl

}
export default dict;