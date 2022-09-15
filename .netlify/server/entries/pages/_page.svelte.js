import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as each } from "../../chunks/index.js";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".animation.svelte-11mbnxt{-webkit-animation:svelte-11mbnxt-bouncing 4s ease infinite;animation:svelte-11mbnxt-bouncing 4s ease infinite}@-webkit-keyframes svelte-11mbnxt-bouncing{0%{transform:scale(1.5) rotate(8deg)}25%{transform:scale(0.9) rotate(12deg)}50%{transform:scale(0.9) rotate(-12deg)}100%{transform:scale(1.5) rotate(8deg)}}@keyframes svelte-11mbnxt-bouncing{0%{transform:scale(1.5) rotate(8deg)}25%{transform:scale(0.9) rotate(12deg)}50%{transform:scale(0.9) rotate(-12deg)}100%{transform:scale(1.5) rotate(8deg)}}",
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "QuoaEsCe" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `<h1 class="${"w-full h-[5rem] text-center py-5 overflow-hidden"}"><p class="${"text-dark font-bold text-3xl animation svelte-11mbnxt"}">${escape(title)}</p>
</h1>`;
});
const Picture = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {} } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"w-48 h-64 mx-auto " + escape(" brightness-100", true) + " bg-taupe cursor-pointer shadow-lg"}"><h2 class="${"flex w-full h-[3rem] m-auto overflow-hidden text-ellipsis whitespace-nowrap"}"><p class="${"m-auto font-bold"}">${escape(data.name)}</p></h2>

  <img draggable="${"false"}" class="${"w-full h-[13rem] object-cover object-top"}"${add_attribute("src", data.src, 0)}${add_attribute("alt", data.name, 0)}></div>`;
});
const picturesData = [
  { src: "/light_yagami.webp", name: "Light Yagami" },
  { src: "/livai.png", name: "Liva\xEF" },
  { src: "/kuwabara.png", name: "Kuwabara" },
  { src: "/gon.png", name: "Gon" },
  { src: "/edward.png", name: "Edward" },
  { src: "/nami.png", name: "Nami" },
  { src: "/shinon.png", name: "Shinon" },
  { src: "/neferupito.png", name: "Neferupito" },
  { src: "/sakura.png", name: "Sakura" },
  { src: "/gaara.png", name: "Gaara" },
  { src: "/l.png", name: "L" },
  { src: "/sacha.png", name: "Sacha" },
  { src: "/saitama.png", name: "Saitama" },
  { src: "/mob.png", name: "Mob" },
  { src: "/senku.png", name: "Senku" },
  { src: "/joseph.png", name: "Joseph" },
  { src: "/mikasa.png", name: "Mikasa" },
  { src: "/albedo.png", name: "Albedo" },
  { src: "/nezuko.png", name: "Nezuko" },
  { src: "/tanjiro.png", name: "Tanjiro" },
  { src: "/sanji.png", name: "Sanji" },
  { src: "/guts.png", name: "Guts" },
  { src: "/tortue_geniale.png", name: "Tortue Geniale" },
  { src: "/netero.png", name: "Netero" },
  { src: "/zoro.png", name: "Zoro" },
  { src: "/mayuri.jpg", name: "Mayuri" },
  { src: "/erza.png", name: "Erza" }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log(picturesData);
  return `<div class="${"main w-full min-h-screen bg-blanc"}">${validate_component(Title, "Title").$$render($$result, {}, {}, {})}
  <div class="${"pictures h-[calc(100%-5rem)] flex flex-wrap p-2 gap-5"}">${each(picturesData, (pict) => {
    return `${validate_component(Picture, "Picture").$$render($$result, { data: pict }, {}, {})}`;
  })}</div></div>`;
});
export {
  Page as default
};
