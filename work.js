// 定义分类和网站链接的字典
const LINKS = {
	常用网站: {
        Kimi: 'https://kimi.moonshot.cn/',
        ChatGPT: 'https://chatgpt.com/',
        Claude: 'https://claude.ai/',
        Gemini: 'https://gemini.google.com/',
	},
    "国内网站": {
        "B站": "https://www.bilibili.com",
        "知乎": "https://zhihu.com",
        "豆瓣": "http://douban.com/",
        "微博": "http://weibo.com",
        "抖音": "https://www.douyin.com",
        "小红书": "https://www.xiaohongshu.com"
      },
      "国外网站": {
        "YouTube": "https://www.youtube.com/",
        "Twitter": "https://x.com/home",
        "Telegram": "https://web.telegram.org/k",
        "Facebook": "http://www.facebook.com/",
        "Instagram": "https://www.instagram.com"
      },
      "大厂邮箱": {
        "Gmail": "https://mail.google.com/",
        "QQMail": "https://mail.qq.com/",
        "Outlook": "https://outlook.live.com/",
        "SinaMail": "https://mail.sina.com/",
        "YeahMail": "https://mail.yeah.net/",
        "126Mail": "https://mail.126.com/",
        "163Mail": "https://mail.163.com/",
        "YahooMail": "https://mail.yahoo.com/"
      },
      "在线工具": {
        "热榜": "https://rebang.today/",
        "QiReader": "https://www.qireader.com/subscriptions",
        "刘明野": "https://tool.liumingye.cn/music/",
        "网抑云": "http://mc.alger.fun/",
        "PodLink": "https://pod.link/",
        "PodTail": "https://podtail.com/podcast/",
        "JRKAN": "http://www.qiumi1314.com/",
        "CatOCR": "https://catocr.com/",
        "LatexLive": "https://www.latexlive.com/",
        "SimpleTex": "https://simpletex.net/",
        "站长之家": "https://seo.chinaz.com/",
        "YiKM": "https://www.yikm.net/",
        "FilePurSuit": "https://filepursuit.com/"
      },
      "在线查询": {
        "Croxyproxy": "https://www.croxyproxy.com/",
        "Proxyium": "https://www.proxyium.com/",
        "LumiProxy": "https://www.lumiproxy.com/zh-hans/online-proxy/proxysite/",
        "PayWallBuster": "https://paywallbuster.com/",
        "itDog": "https://www.itdog.cn/ping/",
        "IPSearch": "https://ip125.com/",
        "IPCheck": "https://ip.sb/",
        "IPInfo": "https://ip.sb/",
        "Whoer": "https://whoer.net/zh",
        "Fast": "https://fast.com",
        "ProxyDetect": "https://proxy.incolumitas.com/proxy_detect.html",
        "Bulianglin": "https://proxy.888005.xyz/",
        "SpeedTest": "https://speed.cloudflare.com/",
        "SpeedTest": "https://www.speedtest.net/"
      },
      "实用工具": {
        "语雀文档": "https://www.yuque.com/",
        "ProcessOn": "https://www.processon.com/diagrams",
        "草料二维码": "https://cli.im/",
        "ShortURL": "https://www.shorturl.at/",
        "Inboxes": "https://inboxes.com/",
        "临时谷歌": "https://www.linshiguge.com/",
        "爱资料工具": "https://www.toolnb.com/",
        "第一在线工具": "https://d1tools.com/tools/",
        "BEJSON": "https://www.bejson.com/"
      },
      "文件中转": {
        "文叔叔": "https://www.wenshushu.cn/",
        "4275": "https://4275.com/",
        "Send": "https://send.vis.ee/",
        "16图床": "https://111666.best/",
        "Imgdd": "https://imgdd.com/",
        "PostImages": "https://postimages.org/",
        "Helloimg": "https://www.helloimg.com/",
        "Pastebin": "https://shz.al/",
        "igdux": "https://igdux.top/",
        "一块剪贴板": "https://ykjtb.com/",
        "NetCut": "https://netcut.cn/"
      },
      "视频下载": {
        "Snapany": "https://snapany.com/zh",
        "Vtool": "https://vtool.pro/",
        "Cobalt": "https://cobalt.tools/",
        "YT1D": "https://yt1d.com/en16",
        "EasyVideoTrans": "https://easyvideotrans.com/playground",
        "Downsub": "https://downsub.com/zh/",
        "Pandasub": "https://www.pdsub.com/",
        "FlowPrompter": "https://flowprompter.app/",
        "5ce": "https://www.5ce.com/"
      },
      "辅助工具": {
        "FluxGPT": "https://flux.urldq.com/",
        "PixFix": "https://zh.pixfix.com/",
        "Html.Zone": "https://html.zone/background-remover",
        "AzureTTS": "https://tts.femoon.top/cn",
        "TikTokVoice": "https://tiktokvoice.net/zh",
        "D1tools": "https://d1tools.com/tools/ai-tts/",
        "ImgTool": "https://imgtool.v1.mk/",
        "Waifu2x": "https://unlimited.waifu2x.net/",
        "通义千问": "https://tongyi.aliyun.com/"
      },
      "代码托管": {
        "GitHub": "https://github.com",
        "GitLab": "https://gitlab.com",
        "Gitee": "https://gitee.com/",
        "GitCode": "https://gitcode.com/",
        "Replit": "https://replit.com/",
        "WebAPI": "https://api.vvhan.com/",
        "CloudFlare": "https://dash.cloudflare.com/",
        "ClouDNS": "https://www.cloudns.net/",
        "US.KG": "https://nic.us.kg/",
        "InfinityFree": "https://dash.infinityfree.com/",
        "Dynv6": "https://dynv6.com/",
        "草啦SSL": "https://cao.la/",
        "SSL证书": "https://letsencrypt.osfipin.com/"
      },
      "编程教程": {
        "博客园": "https://www.cnblogs.com/",
        "阿里云": "https://www.aliyun.com/",
        "开源中国": "https://www.oschina.net/",
        "MAVEN仓库": "https://mvnrepository.com/",
        "微软学习": "https://learn.microsoft.com/",
        "菜鸟教程": "https://www.runoob.com/",
        "W3School": "https://www.w3school.com.cn/",
        "正则可视化": "https://jex.im/regulex",
        "Linux教程": "https://dunwu.github.io/linux-tutorial",
        "ES6教程": "https://es6.ruanyifeng.com/",
        "UILibHub": "https://uilibhub.com/zh",
        "ElementUI": "https://element.eleme.cn/",
        "LayUI": "https://layui.dev/",
        "JavaDoc": "https://docs.oracle.com/",
      },
      "付费设计": {
        "Canvas": "https://www.canva.cn/",
        "Designevo": "https://www.designevo.com/",
        "稿定设计": "https://www.gaoding.com/"
      },
      "配色图标": {
        "配色": "https://www.ysdaima.com/tools/",
        "配色": "https://www.toptal.com/",
        "配色": "https://mycolor.space/",
        "配色": "https://www.toolnb.com/tools/color.html?t=5",
        "配色": "https://uigradients.com/",
        "字体下载": "https://font.sucai999.com/",
        "猫啃网": "https://www.maoken.com/",
        "free-font": "https://wangchujiang.com/free-font/",
        "IconFont": "https://www.iconfont.cn/",
        "YesIcon": "https://yesicon.app/",
        "MingCute": "https://www.mingcute.com/"
      },
      "在线网盘": {
        "阿里云盘": "https://www.alipan.com/",
        "夸克网盘": "https://pan.quark.cn/",
        "百度网盘": "https://pan.baidu.com/",
        "123盘": "https://www.123pan.com/",
        "飞机盘": "https://www.feijipan.com",
        "蓝奏云": "https://up.woozooo.com/mydisk.php/",
        "坚果云": "https://www.jianguoyun.com/",
        "OneNote": "https://www.onenote.com/",
        "金山文档": "https://www.kdocs.cn/",
        "腾讯文档": "https://docs.qq.com/",
        "钉钉文档": "https://docs.dingtalk.com/",
        "飞书文档": "https://www.feishu.cn/"
      },
      "其它材料": {
        "爱给网": "https://www.aigei.com/",
        "找台词": "https://zhaotaici.cn/",
        "LookAE": "https://www.lookae.com/",
        "优品PPT": "https://www.ypppt.com/",
        "懒人Excel": "https://www.lanrenexcel.com/",
        "音效网": "https://www.yisell.com/",
        "小森平音效": "https://taira-komori.jpn.org/freesoundtw.html",
        "淘声": "https://www.tosound.com/search"
      },
      "阅读材料": {
        "ReadPaper": "https://readpaper.com/",
        "范文先生": "https://www.fwsir.com/",
        "过期杂志": "https://www.fx361.com/",
        "SocialBeta": "https://socialbeta.com/",
        "数英网": "https://www.digitaling.com/",
        "梅花网": "http://www.meihua.info/",
        "即能创新": "https://runwise.co/",
        "前瞻网": "https://www.qianzhan.com/",
        "发现报告": "https://www.fxbaogao.com/",
        "艾瑞咨询": "https://www.iresearch.com.cn/",
        "比达咨询": "http://www.bigdata-research.cn/"
      },
      "免费壁纸": {
        "刘明野的壁纸库": "https://tool.liumingye.cn/wallpaper/",
        "极简壁纸": "https://bz.zzzmh.cn",
        "免费壁纸": "https://wallspic.com/cn",
        "壁纸汇": "https://www.bizhihui.com/",
        "拾光壁纸": "https://snake.timeline.ink/random"
      },
      "综合导航": {
        "FRE321": "https://www.fre321.com/",
        "CC宝盒": "https://ccbaohe.com/",
        "宝藏导航": "https://baozangdh.com/",
        "199IT": "http://hao.199it.com/",
        "91搜图": "https://www.91sotu.com/",
        "学术导航": "https://www.sssam.com/",
        "小众资源技术库": "https://www.xiaozhongjishu.com/",
        "福利导航": "https://fuliba123.net/"
      },
      "破解资源": {
        "西部落": "https://www.xibuluo.com/",
        "果核剥壳": "https://ghxi.com/",
        "枫音应用": "https://fy6b.com/",
        "杂铺": "https://tmioe.com/",
        "吾爱破解": "https://www.52pojie.cn/",
        "小众软件": "https://www.appinn.com/",
        "File Eagle": "https://www.fileeagle.com/software",
        "亿破解": "https://www.ypojie.com/",
        "423Down": "https://423down.com/",
        "UptoDown": "https://www.uptodown.com/"
      },
      "官方网站": {
        "学信网": "https://www.chsi.com.cn/",
        "教资网": "https://sso1.jszg.edu.cn/",
        "湖南考试": "http://rsks.onlydwy.com/",
        "事业编": "https://www.shiyebian.net/",
        "小麦考公": "https://www.xiaomaigongkao.com/",
        "学宝教育": "https://www.chinagwy.org/",
        "中学常识": "http://www.1010jiajiao.com/",
        "中华典藏书": "https://www.zhonghuadiancang.com/",
        "黑猫投诉": "https://tousu.sina.com.cn/",
        "广东企业登记": "https://amr.gd.gov.cn/qcdzhdj/",
        "湖南企业登记": "https://hnscjgj.amr.hunan.gov.cn/"
      },
      "杂七杂八": {
        "世界人口": "https://countrymeters.info/cn",
        "国家简码": "https://uutool.cn/info-nation/",
        "气候地图": "https://zoom.earth/maps/",
        "冥想音乐": "https://freemind.fit/",
        "小刀娱乐网": "https://www.x6g.com/",
        "网页聚合": "https://www.link3.cc/sublime",
        "电子印章": "https://xxss0903.github.io/",
        "电子印章": "https://vtool.pro/seal/index.html",
        "阅读书源": "https://shuyuan.yiove.com/",
        "阅读书源": "https://www.yckceo.com/",
        "Zlib": "https://go-to-library.sk/",
        "微软系统": "https://hellowindows.cn/",
        "系统激活": "https://kms.cx/",
        "Win10系统": "https://iwin10.net/",
        "杂铺网盘": "https://pan.tmioe.com/",
        "电视直播软件": "https://www.iptvkk.com/livetv/",
        "直播源搜索": "http://tonkiang.us/"
      },
};
// 网站标题（网站名称）
const WEBSITE_TITLE = '专属导航';

// 获取LINKS的第一个内部字典(第一个分类)
function getFirstInnerDict(outerDict) {
	for (let key in outerDict) {
		if (outerDict.hasOwnProperty(key)) {
			return outerDict[key]; // 返回第一个内部字典
		}
	}
	return null; // 如果外部对象为空，返回 null
}

async function handleRequest(request) {
	// 获取LINKS的第一个内部字典，即第一个分类（常用网站）
	const firstInnerDict = getFirstInnerDict(LINKS);
	// 如果第一个内部字典为空
	if (firstInnerDict == null) {
		return new Response('LINKS变量的值有问题！', {
			headers: { 'content-type': 'text/html;charset=UTF-8' },
		});
	}

	// 动态生成左侧分类名称
	let categoriesHtml = "<div class='categories'>";
	for (const category of Object.keys(LINKS)) {
		categoriesHtml += `<div class="category" onclick="showLinks('${category}')">${category}</div>`;
	}
	categoriesHtml += '</div>';

	// 动态生成初始右侧链接列表（默认显示常用网站）
	let linksHtml = "<div class='links-container'>";
	for (const [name, url] of Object.entries(firstInnerDict)) {
		linksHtml += `<div><a href="${url}" target="_blank">${name}</a></div>`;
	}
	linksHtml += '</div>';

	// HTML 页面内容，包含固定布局、搜索框和交互逻辑
	const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>${WEBSITE_TITLE}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {  
            width: 100vw; 
            padding: 0;
            margin: 0;
            font-family: Arial, sans-serif;
        }

        /* 固定左侧导航栏 */
        .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 280px;
            height: 100vh;
            background-color: #FAFAFA;
            overflow-y: auto;
            text-align: center;
			border-left: none;
            border-right: 1px solid #ccc;
            transition: width 0.3s ease;
            z-index: 1000;
        }

        /* 容器调整，避免被导航栏覆盖 */
        .container {
            margin-left: 280px;
            padding: 0;
            display: block;
            max-width: calc(100% - 280px);
            min-width: 300px;
        }

        /* 标题样式 */
        .sidebar h1 {
            margin-top: 40px;
            margin-bottom: 30px;
            font-size: 24px;
            color: #333;
        }

        .category {
            margin-top: 5px;
            margin-bottom: 5px;
            line-height: 2em;
            cursor: pointer;
            font-weight: bold;
            color: #333300;
        }
        .category:hover {
            color: #999933;
        }

        /* 右侧搜索框样式 */
        .search-bar {
            width: calc(100% - 20px);
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            min-width: 150px;
            transition: none;
        }

        /* 右侧内容区域 */
        .content {
            padding: 20px;
            box-sizing: border-box;
            border-left: 1px solid #ccc;
			border-right: none;
            border-top: none;
            border-bottom: none;
        }

        /* 链接的布局 */
        .links-container {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            line-height: 32px;
            align-items: center;
        }
        .links-container div {
            width: calc(20% - 10px);
        }

        /* 链接样式 */
        a {
            text-decoration: none;
            color: #000;
            font-weight: bold;
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-align: center;
            text-overflow: ellipsis;
            transition: color 0.3s ease;
        }

        /* 鼠标悬停显示下划线 */
        a:hover {
            color: #999933;
            text-align: center;
        }

        /* 响应式设计 */

		/* 超大屏幕设备（>1200px） */
        @media (min-width: 1201px) {
            .sidebar {
                width: 300px;
            }
            .container {
                margin-left: 300px;
                max-width: calc(100% - 300px);
            }
            .sidebar h1 {
                font-size: 26px;
            }
            .category {
                font-size: 16px;
            }
            .search-bar {
                padding: 12px;
            }
            .content {
                padding: 25px;
            }
            .links-container div {
                width: calc(20% - 10px); /* 每行显示5个链接 */
            }
        }

        /* 大屏幕设备（992px - 1200px） */
        @media (max-width: 1200px) and (min-width: 992px) {
            .sidebar {
                width: 280px;
            }
            .container {
                margin-left: 280px;
                max-width: calc(100% - 280px);
            }
            .sidebar h1 {
                font-size: 24px;
            }
            .category {
                font-size: 15px;
            }
            .search-bar {
                padding: 10px;
            }
            .content {
                padding: 20px;
            }
            .links-container div {
                width: calc(33.33% - 10px); /* 每行显示3个链接 */
            }
        }

        /* 中等屏幕设备（600px - 992px） */
        @media (max-width: 991px) and (min-width: 600px) {
            .sidebar {
                width: 220px;
            }
            .container {
                margin-left: 220px;
                max-width: calc(100% - 220px);
            }
            .sidebar h1 {
                font-size: 22px;
            }
            .category {
                font-size: 14px;
            }
            .search-bar {
                padding: 8px;
            }
            .content {
                padding: 18px;
            }
            .links-container div {
                width: calc(50% - 10px); /* 每行显示2个链接 */
            }
        }

        /* 小屏幕设备（480px - 600px） */
        @media (max-width: 599px) and (min-width: 480px) {
            .sidebar {
                width: 180px;
            }
            .container {
                margin-left: 180px;
                max-width: calc(100% - 180px);
            }
            .sidebar h1 {
                font-size: 20px;
            }
            .category {
                font-size: 13px;
            }
            .search-bar {
                padding: 7px;
            }
            .content {
                padding: 15px;
            }
            .links-container div {
                width: 100%; /* 每行显示1个链接 */
            }
        }

        /* 手机设备（480px以下） */
        @media (max-width: 480px) {
            .sidebar {
                position: relative; /* 取消固定定位 */
                width: 100%;
                height: auto;
                border-left: none;
                border-right: none;
                border-top: 2px solid #ccc;
                border-bottom: 1px solid #ccc;
            }

            .container {
                margin-left: 0;
                max-width: 100%;
                display: flex;
                flex-direction: column;
            }

            .content {
                padding: 10px;
                border-left: none;
                border-right: none;
            }

            .links-container div {
                width: 100%; /* 每行显示1个链接 */
            }

            .search-bar {
                width: 100%;
                padding: 8px;
            }

            .sidebar h1 {
                font-size: 18px;
            }

            .category {
                font-size: 12px;
            }

            .content {
                padding: 12px;
            }
        }
    </style>
</head>

<body>
    <div class="sidebar">
        <h1>${WEBSITE_TITLE}</h1>
        ${categoriesHtml}
    </div>
    <div class="container">
        <!-- 右侧内容区域 -->
        <div class="content">
            <!-- 搜索框 -->
            <input type="text" id="searchInput" class="search-bar" placeholder="搜索本站的链接名称..." oninput="filterLinks()">
            <div id="links">${linksHtml}</div>
        </div>
    </div>

    <script>
        const linksData = ${JSON.stringify(LINKS)};

        // 根据类别显示对应的链接
        function showLinks(category) {
            const linksContainer = document.getElementById('links');
            let linksHtml = "<div class='links-container'>";
            for (const [name, url] of Object.entries(linksData[category])) {
                linksHtml += \`<div><a href="\${url}" target="_blank">\${name}</a></div>\`;
            }
            linksHtml += "</div>";
            linksContainer.innerHTML = linksHtml;
        }

        // 搜索框功能：根据关键词筛选链接
        function filterLinks() {
            const input = document.getElementById('searchInput').value.toLowerCase();
            const linksContainer = document.getElementById('links');
            let filteredLinksHtml = "<div class='links-container'>";
            
            // 遍历所有分类，找到匹配的链接
            for (const category of Object.keys(linksData)) {
                for (const [name, url] of Object.entries(linksData[category])) {
                    if (name.toLowerCase().includes(input)) {
                        filteredLinksHtml += \`<div><a href="\${url}" target="_blank">\${name}</a></div>\`;
                    }
                }
            }

            filteredLinksHtml += "</div>";
            linksContainer.innerHTML = filteredLinksHtml;
        }

        // 页面加载时显示默认分类的链接（可选）
        window.onload = function() {
            const defaultCategory = Object.keys(linksData)[0];
            showLinks(defaultCategory);
        }
    </script>
</body>
</html>
`;

	// 返回 HTML 内容
	return new Response(htmlContent, {
		headers: { 'content-type': 'text/html;charset=UTF-8' },
	});
}

export default {
	async fetch(request, env, _ctx) {
		return handleRequest(request);
	},
};
