export const getTime = (time: number, flag = false) => {
  const t = new Date(time);
  const Y = t.getFullYear();
  const M = t.getMonth() + 1;
  const D = t.getDate();
  const h = t.getHours() < 10 ? "0" + t.getHours() : t.getHours();
  const m = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes();

  return flag ? `${Y}年${M}月${D}日 ${h}:${m}` : `${Y}年${M}月${D}日`;
};
