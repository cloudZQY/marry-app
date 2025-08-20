import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useEffect } from "react";

export default function Area5() {
    useEffect(() => {
        const controller = new ScrollMagic.Controller();

        new ScrollMagic.Scene({
            triggerElement: '#calendar-bg',
            duration: 800,
        })
            .setTween(gsap.fromTo('#calendar-bg', {
                top: 0
            }, {
                top: -100,
            }))
            .addTo(controller);

        const split = SplitText.create("#split", {
            type: "chars"
        })
        const tl = gsap.timeline();

        gsap.set("#split", { opacity: 1 });
        tl.from(split.chars, {
            duration: 1,
            y: 100,
            rotation: 90,
            opacity: 0,
            ease: "elastic",
            stagger: 0.03
        });

        new ScrollMagic.Scene({
            triggerElement: '#area-5',
            offset: 200,
            duration: 400,
        })
            .setTween(tl)
            .addTo(controller);
    }, []);

    return (
        <div id="area-5" style={{ position: 'relative' }}>
            <div className="calendar">
                <div className="title">10 / 03</div>
                <div className="table">
                    <div className="t-head">
                        <div>一</div>
                        <div>二</div>
                        <div>三</div>
                        <div>四</div>
                        <div>五</div>
                        <div>六</div>
                        <div>日</div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div>1</div>
                        <div>2</div>
                        <div className="active">
                        </div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                    <div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>
                        <div>12</div>
                    </div>
                    <div>
                        <div>13</div>
                        <div>14</div>
                        <div>15</div>
                        <div>16</div>
                        <div>17</div>
                        <div>18</div>
                        <div>19</div>
                    </div>

                    <div>
                        <div>20</div>
                        <div>21</div>
                        <div>22</div>
                        <div>23</div>
                        <div>24</div>
                        <div>25</div>
                        <div>26</div>
                    </div>
                    <div>
                        <div>27</div>
                        <div>28</div>
                        <div>29</div>
                        <div>30</div>
                        <div>31</div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="area-5-wrapper" id="calendar-bg">
                <div className="mask-all bg">
                    <img className="thumb" src="/assets/img/8.webp" />
                </div>
                <div className="area-5-1">
                    <p className="romance text-5-1" id="split">- Sweet wedding</p>
                    <img className="thumb" src="/assets/img/9.webp" style={{ width: '50vw' }} />
                </div>
            </div>
        </div>
    )
}