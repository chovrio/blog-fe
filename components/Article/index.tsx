import { getAllArticle } from "@/service/ariticle";
import { useEffect, useState } from "react";
import { getTime } from "@/utils/getTime";
import Link from "next/link";
import "./lists.scss";
const Article: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [showArti, setShowArti] = useState<any[]>([]);
  const [pages, setPages] = useState<any[]>([]);
  useEffect(() => {
    getAllArticle().then((res) => {
      setArticles(res.result);
    });
  }, []);
  useEffect(() => {
    const arr = articles.slice(0, 3);
    let t: any[] = [];
    for (let i = 0; i < Math.ceil(articles.length / 3); i++) {
      t.push(i);
    }
    setPages(t);
    setShowArti(arr);
  }, [articles]);
  const changePage = (page: number) => {
    const arr = articles.slice(page * 3, page * 3 + 3);
    setShowArti(arr);
  };
  return (
    <div className="lists">
      {showArti.length !== 0 &&
        showArti.map((item) => (
          <Link href={`/posts/${item._id}`} className="essay" key={item._id}>
            <div className="Img">123</div>
            <div className="content">
              <h1 className="title">{item.name}</h1>
              <p>标签：{item.tags.join("，")}</p>
              <p>发表于：{getTime(item.createTime)}</p>
              <p>更新于：{getTime(item.updateTime)}</p>
            </div>
          </Link>
        ))}
      <div className="pages">
        {articles.length !== 0 &&
          pages.map((_, index) => (
            <span
              key={Math.random()}
              onClick={() => changePage(index)}
              className="page"
            >
              {index + 1}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Article;
