let budget = 1000
let total_cost = 0
let order_list = []

let menu_list = [["商品番号","商品名","価格"],
[1202,"小エビのサラダ",350],
[1205,"わかめのサラダ",350],
[1209,"チキンのサラダ",350],
[1301,"コーンクリームスープ",150],
[1305,"田舎風ミネストローネ",300],
[1307,"たまねぎのズッパ",300],
[1401,"辛味チキン",300],
[1402,"アロスティチーニ",400],
[1403,"ほうれん草のソテー",200],
[1404,"ポップコーンシュリンプ",300],
[1405,"エスカルゴのオーブン焼き",400],
[1406,"小エビのカクテル",280],
[1407,"チョリソー",400],
[1408,"蒸し鶏の香味ソース",280],
[1410,"ムール貝のガーリック焼き",400],
[1413,"キャロットラベ",200],
[1416,"ポテトのグリル",300],
[1417,"バッファローモッツァレラのカプレーゼ",430],
[1422,"ハモン・セラーノ",320],
[1423,"生ハムとバッファローモッツァレラの組み合わせ",500],
[1425,"柔らか青豆の温サラダ",200],
[1435,"スイートコーン",200],
[1452,"【Wサイズ】アロスティチーニ",800],
[2101,"ミラノ風ドリア",300],
[2103,"半熟卵のミラノ風ドリア",350],
[2108,"焼きチーズミラノ風ドリア",350],
[2110,"たらことポップコーンシュリンプのドリア",400],
[2116,"ポップコーンシュリンプとたらこのクリームグラタン(全粒粉)",430],
[2203,"バッファオーモッツァレラのマルゲリータピザ",400],
[2204,"野菜ときのこのピザ",400],
[2206,"たっぷりコーンのピザ",400],
[2208,"ソーセージピザ",400],
[2301,"タラコソースシシリー風",400],
[2303,"ペペロンチーノ",300],
[2304,"パルマ風スパゲッティ",400],
[2305,"カルボナーラ",500],
[2306,"ミートソースボロニア風",400],
[2310,"スープ入り塩味ボンゴレ",500],
[2316,"半熟卵のミートソースボロニア風",450],
[2317,"半熟卵のペペロンチーノ",350],
[2320,"小エビのタラコソース",540],
[2321,"キノコとほうれん草のクリームスパゲッティ",600],
[2325,"ペンネアラビアータ(全粒粉)",430],
[2328,"イカの墨入りセピアソース",500],
[2402,"若鶏のディアボラ風",400],
[2403,"イタリアンハンバーグ",500],
[2404,"柔らかチキンのチーズ焼き",500],
[2406,"ハンバーグステーキ",400],
[2407,"ディアボラ風ハンバーグ",500],
[2413,"ラム(仔羊)と野菜のグリル",870],
[2418,"ミックスグリル",650],
[3101,"ライス",150],
[3102,"ラージライス",200],
[3103,"スモールライス",100],
[3110,"フォッカチオ",150],
[3111,"ガーリックフォッカチオ",200],
[3112,"シナモンフォッカチオ",200],
[3201,"ティラミス クラシコ",300],
[3205,"ミルクジェラート",250],
[3207,"チョコレートケーキ",300],
[3208,"イタリアンプリン",260],
[3212,"プリンとティラミス クラシコの盛り合わせ",500],
[3213,"トリフアイスクリーム",350],
[3214,"ジェラート＆シナモンフォッカチオ",450],
[3215,"コーヒーゼリー＆ミルクジェラート",350],
[4301,"トッピング半熟卵",50],
[4307,"トッピング粉チーズ(グランモラビア)",100],
[5101,"セットドリンクバー",200],
[5102,"【キッズ】セットドリンクバー",100],
[5103,"単品ドリンクバー",300],
[5305,"サイゼリヤドレッシング",500]
]

//WRITE ME!!
while (total_cost < budget){
    let idx = Math.floor(Math.random() * (menu_list.length-1))+1
    let order = menu_list[idx]
    order_list.push(order[1])
    total_cost += order[2]
}

console.log("注文: " + order_list)
console.log("合計: " + total_cost + "円")