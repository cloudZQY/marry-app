'use client'

import loadScripts from 'load-scripts';
import { useEffect, useState } from "react";
import { loadFonts } from './common/font';
import Area1 from './component/Area1';
import Area2 from './component/Area2';
import Area3 from './component/Area3';
import Area4 from './component/Area4';
import Area5 from './component/Area5';
import Area6 from './component/Area6';
import Rose from './component/Rose';
import './style/global.scss';
import './style/index.scss';


export default function Home() {
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    (async function () {
      await Promise.all([
        loadScripts(
          'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js',
        ),
        loadFonts(),
      ])

      await loadScripts(
        'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.min.js',
      );
      setLoaded(true);
    })();
  }, []);


  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      {loaded && <div id="container">
        <div className="scroller">
          <Area1 />
          <Area2 />
          <Area3 />
          <Area4 />
          <Area5 />
          <Area6 />
        </div>
      </div>}
      {loaded && <Rose />}
    </main>
  )
}
