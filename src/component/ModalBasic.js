import styles from './ModalBasic.module.css';
import jQuery from 'jquery';
const ModalBasic = ({ setModalOpen }) => {

    const closeModal = () => {
        setModalOpen(false);

    };

   /*  (function ($) {
        "use strict";
        $(function () {
            function animated_contents() {
                $(".zt-skill-bar > div ").each(function (i) {
                    var $this = $(this),
                        skills = $this.data('width');

                    $this.css({ 'width': skills + '%' });

                });
            }

            if (jQuery().appear) {
                $('.zt-skill-bar').appear().on('appear', function () {
                    animated_contents();
                });
            } else {
                animated_contents();
            }
        });
    }(jQuery)); */


    return (
        <div className={styles.background}>

            {/* 모달창 내부 */}
            <div className={styles.modal_box}>
                {/* 닫힘 버튼 */}
                <div className={styles.x_box}>
                    <button className={styles.close} onClick={closeModal}>x</button>
                </div>
                {/* 아래 별점 */}
                <div className={styles.modal_star}>
                    <h1>★ 4.88ㆍ후기 303개</h1>
                    <div className='star_rating'>
                        <div class="zt-span6 last">

                            <div class="zt-skill-bar"><div data-width="96" style="">청결도<span>4.8</span></div></div>
                            <div class="zt-skill-bar"><div data-width="98" style="">정확성<span>4.9</span></div></div>
                            <div class="zt-skill-bar"><div data-width="98" style=";">의사소통<span>4.9</span></div></div>
                            <div class="zt-skill-bar"><div data-width="100" style=";">위치<span>5.0</span></div></div>
                            <div class="zt-skill-bar"><div data-width="98" style=";">체크인<span>5.0</span></div></div>
                            <div class="zt-skill-bar"><div data-width="92" style=";">가격 대비 만족도<span>4.6</span></div></div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalBasic;