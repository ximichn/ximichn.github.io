(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{520:function(t,r,s){"use strict";s.r(r);var v=s(2),n=Object(v.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block theorem"},[s("p",{staticClass:"title"},[t._v("题目")]),s("p",[t._v("我们得到了一副藏宝图，藏宝图显示，在一个迷宫中存在着未被世人发现的宝藏。"),s("br"),t._v("\n迷宫是一个二维矩阵，用一个字符串数组表示。它标识了唯一的入口（用 'S' 表示），和唯一的宝藏地点（用 'T' 表示）。但是，宝藏被一些隐蔽的机关保护了起来。在地图上有若干个机关点（用 'M' 表示），"),s("strong",[t._v("只有所有机关均被触发，才可以拿到宝藏。")]),s("br"),t._v("\n要保持机关的触发，需要把一个重石放在上面。迷宫中有若干个石堆（用 'O' 表示），每个石堆都有"),s("strong",[t._v("无限")]),t._v("个足够触发机关的重石。但是由于石头太重，我们一次只能搬一个石头到指定地点。"),s("br"),t._v("\n迷宫中同样有一些墙壁（用 '#' 表示），我们不能走入墙壁。剩余的都是可随意通行的点（用 '.' 表示）。石堆、机关、起点和终点（无论是否能拿到宝藏）也是可以通行的。"),s("br"),t._v("\n我们每步可以选择向上/向下/向左/向右移动一格，并且不能移出迷宫。搬起石头和放下石头不算步数。那么，从起点开始，我们最少需要多少步才能最后拿到宝藏呢？如果无法拿到宝藏，返回 -1 。"),s("br"),t._v(" "),s("strong",[t._v("示例1：")]),s("br"),t._v('\n输入： ["S#O", "M..", "M.T"]'),s("br"),t._v("\n输出：16"),s("br"),t._v("\n解释：最优路线为： S->O, cost = 4, 去搬石头 O->第二行的M, cost = 3, M机关触发 第二行的M->O, cost = 3, 我们需要继续回去 O 搬石头。 O->第三行的M, cost = 4, 此时所有机关均触发 第三行的M->T, cost = 2，去T点拿宝藏。 总步数为16。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://gitee.com/tabala/picgo/raw/master/img/LeetCode-LCP13-寻宝.gif"}}),s("br"),t._v(" "),s("strong",[t._v("示例2：")]),s("br"),t._v('\n输入： ["S#O", "M.#", "M.T"]'),s("br"),t._v("\n输出：-1"),s("br"),t._v("\n解释：我们无法搬到石头触发机关"),s("br"),t._v(" "),s("strong",[t._v("示例3：")]),s("br"),t._v('\n输入： ["S#O", "M.T", "M.."]'),s("br"),t._v("\n输出：17"),s("br"),t._v("\n解释：注意终点也是可以通行的。"),s("br"),t._v(" "),s("strong",[t._v("限制：")])]),t._v(" "),s("ul",[s("li",[t._v("1 <= maze.length <= 100")]),t._v(" "),s("li",[t._v("1 <= maze[i].length <= 100")]),t._v(" "),s("li",[t._v("maze[i].length == maze[j].length")]),t._v(" "),s("li",[t._v("S 和 T 有且只有一个")]),t._v(" "),s("li",[t._v("0 <= M的数量 <= 16")]),t._v(" "),s("li",[t._v("0 <= O的数量 <= 40，题目保证当迷宫中存在 M 时，一定存在至少一个 O")])])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);r.default=n.exports}}]);