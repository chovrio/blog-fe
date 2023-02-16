"use client";
import Head from "next/head";
import { usePathname, useSearchParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; // 解析标签，支持html语法
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"; // 代码高亮
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getTime } from "@/utils/getTime";
import "@/styles/article.scss";
import "./index.scss";
// 引入代码高亮css
import { FC, useEffect, useState } from "react";
import { getArticleContent } from "@/service/ariticle";
import Profile from "@/components/Profile";
const Post: FC = () => {
  const [markdown, setMarkdown] = useState<string>("");
  const [info, setInfo] = useState<any>({});
  const [article, setArticle] = useState<string>("");
  const pathname = usePathname();
  useEffect(() => {
    let id = pathname?.split("/")[2] || "";
    setArticle(id);
  }, [pathname]);
  useEffect(() => {
    if (article !== "") {
      getArticleContent(article).then((data) => {
        setMarkdown(data.result.content);
        setInfo(data.result.info);
      });
    }
  }, [article]);
  return (
    <div className="article">
      <Head>
        <title>test</title>
        <meta name="keywords" content={`${info.name} info.author`} />
        <meta
          name="description"
          content={`${process.env.NEXT_PUBLIC_NAME}的博客`}
        />
      </Head>
      <div className="title">
        <h2>{info.name}</h2>
        <div className="data">{getTime(info.updateTime)}</div>
        <div>阅读量:埋点未作</div>
      </div>
      <div className="test">
        <article className="content py-8 prose  prose-h1:mt-8">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    // eslint-disable-next-line react/no-children-prop
                    children={String(children).replace(/\n$/, "")}
                    style={tomorrow as any}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {markdown}
          </ReactMarkdown>
        </article>
        <Profile />
      </div>
    </div>
  );
};
export default Post;
