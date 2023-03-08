(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{382:function(_,v,r){"use strict";r.r(v);var t=r(42),a=Object(t.a)({},(function(){var _=this,v=_.$createElement,r=_._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[r("h1",{attrs:{id:"_3-6-组管理和权限管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-组管理和权限管理"}},[_._v("#")]),_._v(" 3.6 组管理和权限管理")]),_._v(" "),r("h2",{attrs:{id:"_1-linux组基本介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-linux组基本介绍"}},[_._v("#")]),_._v(" 1. Linux组基本介绍")]),_._v(" "),r("ul",[r("li",[_._v("Linux中每个用户属于一个组，不能独立于组以外。所以在Linux中每个文件存在组的概念：\n"),r("ol",[r("li",[_._v("所有者")]),_._v(" "),r("li",[_._v("所在组")]),_._v(" "),r("li",[_._v("其他组")]),_._v(" "),r("li",[_._v("改变用户所在组")])])])]),_._v(" "),r("h2",{attrs:{id:"_2-文件-目录所有者"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-文件-目录所有者"}},[_._v("#")]),_._v(" 2. 文件/目录所有者")]),_._v(" "),r("blockquote",[r("p",[_._v("一般为文件的创建者，谁创建了该文件，就自然的称为该文件的所有者。")])]),_._v(" "),r("ul",[r("li",[_._v("查看文件所有者：ls -ahl")]),_._v(" "),r("li",[_._v("修改文件所有者：chown (用户名) (文件名)")])]),_._v(" "),r("h2",{attrs:{id:"_3-文件-目录所在组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-文件-目录所在组"}},[_._v("#")]),_._v(" 3. 文件/目录所在组")]),_._v(" "),r("blockquote",[r("p",[_._v("当某个用户创建了一个文件之后，默认之歌文件所在组就是该用户所在的组")])]),_._v(" "),r("ul",[r("li",[_._v("查看文件所有者：ls -ahl")]),_._v(" "),r("li",[_._v("修改文件所在组：chgrp (组名) (文件名)")])]),_._v(" "),r("h2",{attrs:{id:"_4-其他组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-其他组"}},[_._v("#")]),_._v(" 4. 其他组")]),_._v(" "),r("blockquote",[r("p",[_._v("除文件的所有者和所在组的用户外，系统的其他用户都是文件的其他组")])]),_._v(" "),r("h2",{attrs:{id:"_5-文件属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-文件属性"}},[_._v("#")]),_._v(" 5. 文件属性")]),_._v(" "),r("ul",[r("li",[_._v("ls -l中显示的内容如图所示\n"),r("img",{attrs:{src:"/linux/3/3.6%E6%96%87%E4%BB%B6%E5%B1%9E%E6%80%A7.jpg",alt:"3.6文件属性.jpg"}})])]),_._v(" "),r("ol",[r("li",[_._v("在Linux中第一个字符代表这个文件是目录、文件或链接文件等等。\n"),r("ul",[r("li",[_._v("当为[ d ]则是目录")]),_._v(" "),r("li",[_._v("当为[ - ]则是文件；")]),_._v(" "),r("li",[_._v("若是[ l ]则表示为链接文档(link file)；")]),_._v(" "),r("li",[_._v("若是[ b ]则表示为装置文件里面的可供储存的接口设备(可随机存取装置)；")]),_._v(" "),r("li",[_._v("若是[ c ]则表示为装置文件里面的串行端口设备，例如键盘、鼠标(一次性读取装置)。")])])]),_._v(" "),r("li",[_._v("接下来的字符中，以三个为一组，且均为『rwx』 的三个参数的组合。[ r ]代表可读(read)、[ w ]代表可写(write)、[ x ]代表可执行(execute)。 要注意的是，这三个权限的位置不会改变，如果没有权限，就会出现减号[ - ]而已。\n每个文件的属性由左边第一部分的10个字符来确定（如下图）。\n"),r("img",{attrs:{src:"/linux/3/3.6%E6%96%87%E4%BB%B6%E6%9D%83%E9%99%90.png",alt:"文件权限"}})])]),_._v(" "),r("h3",{attrs:{id:"_5-1-rwx权限详解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-rwx权限详解"}},[_._v("#")]),_._v(" 5.1 rwx权限详解")]),_._v(" "),r("ul",[r("li",[_._v("rwx作用到文件：\n"),r("ul",[r("li",[_._v("r：read，可读。读取查看。")]),_._v(" "),r("li",[_._v("w：write，可以修改。但不代表可以删除该文件。删除一个文件的前提条件是对该文件所在的目录有写权限，才能删除该文件。")]),_._v(" "),r("li",[_._v("x：execute，可执行。可以被执行。")])])]),_._v(" "),r("li",[_._v("rwx作用到目录：\n"),r("ul",[r("li",[_._v("r：可以读取，ls查看目录内容。")]),_._v(" "),r("li",[_._v("w：可以修改，目录内创建+删除+重命名目录。")]),_._v(" "),r("li",[_._v("x：可执行，可以进入该目录。")])])])]),_._v(" "),r("h3",{attrs:{id:"_5-2-修改权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-修改权限"}},[_._v("#")]),_._v(" 5.2 修改权限")]),_._v(" "),r("h4",{attrs:{id:"_5-2-1-chgrp-更改文件属组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-1-chgrp-更改文件属组"}},[_._v("#")]),_._v(" 5.2.1 chgrp：更改文件属组")]),_._v(" "),r("ul",[r("li",[_._v("chgrp [-R] 属组名 文件名\n"),r("ul",[r("li",[_._v("-R：递归更改文件属组，就是在更改某个目录文件的属组时，如果加上-R的参数，那么该目录下的所有文件的属组都会更改。")])])])]),_._v(" "),r("h4",{attrs:{id:"_5-2-2-chown-更改文件属主-也可以同时更改文件属组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-2-chown-更改文件属主-也可以同时更改文件属组"}},[_._v("#")]),_._v(" 5.2.2 chown：更改文件属主，也可以同时更改文件属组")]),_._v(" "),r("blockquote",[r("p",[_._v("语法:")]),_._v(" "),r("ul",[r("li",[_._v("chown [–R] 属主名 文件名")]),_._v(" "),r("li",[_._v("chown [-R] 属主名：属组名 文件名")])])]),_._v(" "),r("h4",{attrs:{id:"_5-2-3-chmod-更改文件9个属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-3-chmod-更改文件9个属性"}},[_._v("#")]),_._v(" 5.2.3 chmod：更改文件9个属性")]),_._v(" "),r("ul",[r("li",[_._v("Linux文件属性有两种设置方法，一种是数字，一种是符号。")]),_._v(" "),r("li",[_._v("Linux文件的基本权限就有九个，分别是owner/group/others三种身份各有自己的read/write/execute权限。")]),_._v(" "),r("li",[_._v("我们可以使用数字来代表各个权限，各权限的分数对照表如下：\n"),r("ul",[r("li",[_._v("r:4")]),_._v(" "),r("li",[_._v("w:2")]),_._v(" "),r("li",[_._v("x:1")])])]),_._v(" "),r("li",[_._v("每种身份(owner/group/others)各自的三个权限(r/w/x)分数是需要累加的，例如当权限为： [-rwxrwx---] 分数则是：\n"),r("ul",[r("li",[_._v("owner = rwx = 4+2+1 = 7")]),_._v(" "),r("li",[_._v("group = rwx = 4+2+1 = 7")]),_._v(" "),r("li",[_._v("others= --- = 0+0+0 = 0")])])])]),_._v(" "),r("h5",{attrs:{id:"_5-2-3-1-使用数字修改权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-3-1-使用数字修改权限"}},[_._v("#")]),_._v(" 5.2.3.1 使用数字修改权限")]),_._v(" "),r("ul",[r("li",[r("strong",[_._v("chmod [-R] xyz 文件或目录")]),_._v(" "),r("ul",[r("li",[_._v("xyz : 就是刚刚提到的数字类型的权限属性，为 rwx 属性数值的相加。")]),_._v(" "),r("li",[_._v("-R : 进行递归(recursive)的持续变更，亦即连同次目录下的所有文件都会变更")]),_._v(" "),r("li",[_._v("举例来说，如果要将.bashrc这个文件所有的权限都设定启用，那么命令如下：\n"),r("img",{attrs:{src:"/linux/3/3.6%E6%9B%B4%E6%94%B9%E6%96%87%E4%BB%B6%E5%B1%9E%E6%80%A7.jpg",alt:"3.6更改文件属性.jpg"}})])])])]),_._v(" "),r("h5",{attrs:{id:"_5-2-3-1-使用符号修改权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-3-1-使用符号修改权限"}},[_._v("#")]),_._v(" 5.2.3.1 使用符号修改权限")]),_._v(" "),r("ul",[r("li",[_._v("我们就可以使用 u(user), g(group), o(others) 来代表三种身份的权限！")]),_._v(" "),r("li",[_._v("此外， a 则代表 all，即全部的身份。读写的权限可以写成 r, w, x，也就是可以使用下表的方式来看\n"),r("img",{attrs:{src:"/linux/3/3.6%E7%AC%A6%E5%8F%B7%E4%BF%AE%E6%94%B9%E6%9D%83%E9%99%90.jpg",alt:"3.6符号修改权限.jpg"}})]),_._v(" "),r("li",[_._v("举例说明\n"),r("img",{attrs:{src:"/linux/3/3.6%E6%9D%83%E9%99%90%E4%BF%AE%E6%94%B9%E4%B8%BE%E4%BE%8B.jpg",alt:"3.6权限修改举例"}})])])])}),[],!1,null,null,null);v.default=a.exports}}]);