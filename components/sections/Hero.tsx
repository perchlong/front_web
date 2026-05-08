import { Button } from "../ui/Button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24">
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />
      {/* 这里添加relative的原因是图层层级提升（定位元素会覆盖非定位元素）或未来扩展（该元素内可添加absolute） */}
      {/* tailwind默认是在手机端 ，lg:grid-cols-2表示在大屏幕上使用两列布局 */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          {/* inline-flex：像inline一样不独占一行，同时内部还能flex布局 */}
          <p className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-sky-300">
            AI-powered sports gear
            <span className="ml-2 rounded-full bg-sky-400/20 px-2 py-1 text-xs text-sky-300">
              New
            </span>
          </p>
          {/* tracking-tight:字母间距更紧凑 */}
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Train smarter with intelligent sports equipment.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Discover smart wearable devices that capture motion, analyze
            performance, and help athletes improve with real-time insights.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="primary">Shop Now</Button>
          </div>
        </div>

        <div className="relative">
          {/* backdrop-blur: 模糊后面的背景;bg-white/5:5%透明白色;border-white/10:轻边框;shadow-2xl:超大阴影,制造“浮起来”的感觉*/}
          <div className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            {/* aspect-square: 宽高比例 1:1,永远是正方形;*/}
            {/* 现代高级 UI：“低饱和 + 半透明” */}
            {/* 这里的relative是满足nextjs的Image组件，fill时默认是absolute，如果你没有给包含它的容器设置 relative，图片就会往上层层寻找，直到把不该填满的空间撑爆或者跑遍全屏*/}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-linear-to-br from-sky-400/30 via-blue-500/20 to-purple-500/20">
              {/* 这里是占位图，未来可以替换成产品图片 */}
              <Image
                src="/run.png"
                alt="Product Images"
                loading="eager"
                fill
                unoptimized
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
