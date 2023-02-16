import instance from ".";
export const getAllArticle = async () => {
  const res = await instance.get({
    url: `/essay/acquire-fe?name=${process.env.NEXT_PUBLIC_NAME}`,
  });
  return res.data;
};
export const getArticleContent = async (id: string) => {
  const res = await instance.get({
    url: `/essay/content-fe?name=${process.env.NEXT_PUBLIC_NAME}&id=${id}`,
  });
  return res.data;
};
