import { Link } from "react-router-dom";
import Preview from "../components/Preview";

const Index = () => {
    const md = `
### これはなに？
2022年 traP 冬ハッカソン 03班で作られた計算モデルを用いたパズルコンテスト

計算モデルというのは Wikipedia を参照すると「計算・推論・証明といった行為を理論的・抽象的に考察するための数理モデルである。」と書いてありますが、よくわからないのでざっくり説明すると文字列の読み書き, 置換や移動などといった操作だけで動く機械と思えばいいです。それを使って色んな問題を解いてみようというのがこのサイトの趣旨です。

問題で使われる計算モデルには様々な種類があり、拡張マルコフアルゴリズムやTag-System、チューリングマシン、SKIコンビネータなどがあり、それぞれの問題で提供されます。

例えば、マルコフアルゴリズムとは置換のみを用いて実行するもので以下のルールに従います。

(1). 文字列 S と置換規則を用意する．
(2). 文字列 S に適用できる置換規則のうち先頭のものを適用する．
(3). 適用した置換規則が停止規則なら停止する．
(4). S に適用できる置換規則がなければ停止する．
(5). ステップ 2 に戻って繰り返す．

このようなルールの上で問題の例としては電卓を作ったりプログラミング言語を作ってみるというのがあります。

### システムについて
問題作成者が用意した Testcase にすべて正解すると，正解と判定されます。
Testcase を特定する行為はお控えください.（Testcase を変更してリジャッジを行います．）
`;
    return (
        <>
            <h1 className="font-mono py-5">Turing Qomplete</h1>
            <p className="mb-10">素朴な計算モデルがチューリング完全を目指す物語</p>
            <div className="w-8/12 ml-10 mt-20">
                <Preview value={md}></Preview>
                <ol className="py-5">
                    <li>
                        <Link to="/problems" className="text-blue-500 hover:underline py-1">
                            CHALLENGES
                        </Link>
                    </li>
                    <li>
                        <Link to="/ranking" className="text-blue-500 hover:underline py-1">
                            RANKING
                        </Link>
                    </li>
                </ol>
            </div>
        </>
    );
};

export default Index;
