// import React, { useEffect, useRef } from 'react';
// import { TweenLite, Circ } from 'gsap';

// function Circle(pos, rad, color, ctx) {
//     this.pos = pos || null;
//     this.radius = rad || null;
//     this.color = color || null;
//     this.active = 0;
//     this.ctx = ctx;

//     this.draw = function () {
//         if (!this.active) return;
//         const ctx = this.ctx;
//         ctx.beginPath();
//         ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
//         ctx.fillStyle = `rgba(4, 42, 84,${this.active})`;
//         ctx.fill();
//     };
// }

// function AnimatedHeader() {
//     const canvasRef = useRef(null);
//     let width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

//     useEffect(() => {
//         function initHeader() {
//             width = window.innerWidth;
//             height = window.innerHeight;
//             target = { x: width / 2, y: height / 2 };
//             largeHeader = document.getElementById('part-2');
//             if (!largeHeader) return;
//             canvas = canvasRef.current;
//             canvas.width = width;
//             canvas.height = height;
//             ctx = canvas.getContext('2d');
//             if (!ctx) {return;}
//             points = [];
//             for (let x = 0; x < width; x += width / 20) {
//                 for (let y = 0; y < height; y += height / 20) {
//                     const px = x + Math.random() * width / 20;
//                     const py = y + Math.random() * height / 20;
//                     const p = { x: px, originX: px, y: py, originY: py };
//                     points.push(p);
//                 }
//             }

//             for (let i = 0; i < points.length; i++) {
//                 const closest = [];
//                 const p1 = points[i];
//                 for (let j = 0; j < points.length; j++) {
//                     const p2 = points[j];
//                     if (p1 === p2) continue;

//                     let placed = false;
//                     for (let k = 0; k < 5; k++) {
//                         if (!placed) {
//                             if (closest[k] === undefined) {
//                                 closest[k] = p2;
//                                 placed = true;
//                             }
//                         }
//                     }

//                     for (let k = 0; k < 5; k++) {
//                         if (!placed) {
//                             if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
//                                 closest[k] = p2;
//                                 placed = true;
//                             }
//                         }
//                     }
//                 }
//                 p1.closest = closest;
//             }

//             for (const i in points) {
//                 const c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)', ctx);
//                 points[i].circle = c;
//             }
//         }

//         function addListeners() {
            
//             window.addEventListener('mousemove', mouseMove);
//             window.addEventListener('scroll', scrollCheck);
//             window.addEventListener('resize', resize);
//         }

//         // function mouseMove(e) {
//         //     let posx = 0, posy = 0;
//         //     if (e.pageX || e.pageY) {
//         //         posx = e.pageX;
//         //         posy = e.pageY;
//         //     } else if (e.clientX || e.clientY) {
//         //         posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//         //         posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
//         //     }
//         //     target.x = posx;
//         //     target.y = posy;
//         // }
//         function mouseMove(e) {
//             let posx = 0, posy = 0;
        
//             // Get the mouse position
//             if (e.pageX || e.pageY) {
//                 posx = e.pageX;
//                 posy = e.pageY;
//             } else if (e.clientX || e.clientY) {
//                 posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//                 posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
//             }
        
//             // Log the mouse position
//             // console.log('Mouse Position:', posx, posy);
        
//             // Get the bounds of #part-2
//             const part2 = document.getElementById('part-2');
//             if (part2) {
//                 const rect = part2.getBoundingClientRect();
//                 // Log the element bounds
//                 // console.log('Element Bounds:', rect);
        
//                 // Check if the mouse is within the bounds of #part-2
//                 const isInPart2 = (
//                     posx >= rect.left + window.scrollX &&
//                     posx <= rect.right + window.scrollX &&
//                     posy >= rect.top + window.scrollY &&
//                     posy <= rect.bottom + window.scrollY
//                 );
        
//                 // Log if mouse is inside the element
//                 // console.log('Is Mouse Inside #part-2:', isInPart2);
        
//                 if (isInPart2) {
//                     target.x = posx;
//                     target.y = posy;
//                 }
//             }
//         }
        
      
    
//         function scrollCheck() {
//             animateHeader = document.body.scrollTop > height ? false : true;
//         }

//         function resize() {
//             width = window.innerWidth;
//             height = window.innerHeight;
//             largeHeader.style.height = height + 'px';
//             canvas.width = width;
//             canvas.height = height;
//         }

//         function initAnimation() {
//             animate();
//             for (const i in points) {
//                 shiftPoint(points[i]);
//             }
//         }

//         function animate() {
//             if (animateHeader) {
//                 ctx.clearRect(0, 0, width, height);
//                 for (const i in points) {
//                     if (Math.abs(getDistance(target, points[i])) < 4000) {
//                         points[i].active = 0.3;
//                         points[i].circle.active = 0.6;
//                     } else if (Math.abs(getDistance(target, points[i])) < 20000) {
//                         points[i].active = 0.1;
//                         points[i].circle.active = 0.3;
//                     } else if (Math.abs(getDistance(target, points[i])) < 40000) {
//                         points[i].active = 0.02;
//                         points[i].circle.active = 0.1;
//                     } else {
//                         points[i].active = 0;
//                         points[i].circle.active = 0;
//                     }

//                     drawLines(points[i]);
//                     points[i].circle.draw();
//                 }
//             }
//             requestAnimationFrame(animate);
//         }

//         function shiftPoint(p) {
//             TweenLite.to(p, 1 + 1 * Math.random(), {
//                 x: p.originX - 50 + Math.random() * 100,
//                 y: p.originY - 50 + Math.random() * 100,
//                 ease: Circ.easeInOut,
//                 onComplete: function () {
//                     shiftPoint(p);
//                 }
//             });
//         }

//         // Canvas manipulation
//         function drawLines(p) {
//             if (!p.active) return;
//             for (const i in p.closest) {
//                 ctx.beginPath();
//                 ctx.moveTo(p.x, p.y);
//                 ctx.lineTo(p.closest[i].x, p.closest[i].y);
//                 ctx.strokeStyle = 'rgba(4, 42, 84,' + p.active + ')';
//                 ctx.stroke();
//             }
//         }

//         // Util
//         function getDistance(p1, p2) {
//             return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
//         }

//         initHeader();
//         initAnimation();
//         addListeners();

//         return () => {
//             window.removeEventListener('mousemove', mouseMove);
//             window.removeEventListener('scroll', scrollCheck);
//             window.removeEventListener('resize', resize);
//         };
//     }, []);

//     return (
//         <canvas
//             ref={canvasRef}
//             style={{
//                 position: 'fixed',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 zIndex: -1,
//             }}
//             id="demo-canvas"
          
//         ></canvas>
//     );
// }

// export default AnimatedHeader;
import React, { useEffect, useRef } from 'react';
import { TweenLite, Circ } from 'gsap';

function Circle(pos, rad, color, ctx) {
    this.pos = pos || null;
    this.radius = rad || null;
    this.color = color || null;
    this.active = 0;
    this.ctx = ctx;

    this.draw = function () {
        if (!this.active) return;
        const ctx = this.ctx;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(4, 42, 84,${this.active})`;
        ctx.fill();
    };
}

function AnimatedHeader() {
    const canvasRef = useRef(null);
    let width, height, canvas, ctx, points, target, animateHeader = true;
    function resize() {
        canvas = canvasRef.current;
        if (canvas) {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            return { width, height };
        }
        return { width: 0, height: 0 }; // Fallback if canvas is not defined
    }
    useEffect(() => {
    
        function initHeader() {
            // width = window.innerWidth;
            // height = window.innerHeight;
            const { width,height } = resize();
            // width =document.documentElement.scrollWidth;
            // height = document.documentElement.scrollHeight;

            target = { x: width / 2, y: height / 2 };
            canvas = canvasRef.current;
            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext('2d');
       
            points = [];

            for (let x = 0; x < width; x += width / 20) {
                for (let y = 0; y < height; y += height / 20) {
                    const px = x + Math.random() * width / 20;
                    const py = y + Math.random() * height / 20;
                    const p = { x: px, originX: px, y: py, originY: py };
                    points.push(p);
                }
            }

            for (let i = 0; i < points.length; i++) {
                const closest = [];
                const p1 = points[i];
                for (let j = 0; j < points.length; j++) {
                    const p2 = points[j];
                    if (p1 === p2) continue;

                    let placed = false;
                    for (let k = 0; k < 5; k++) {
                        if (!placed) {
                            if (closest[k] === undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for (let k = 0; k < 5; k++) {
                        if (!placed) {
                            if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
                p1.closest = closest;
            }

            for (const i in points) {
                const c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)', ctx);
                points[i].circle = c;
            }
        }

        function addListeners() {
            window.addEventListener('mousemove', mouseMove);
            window.addEventListener('scroll', scrollCheck);
            window.addEventListener('resize', resize);
        }

        function mouseMove(e) {
            let posx = 0, posy = 0;

            if (e.pageX || e.pageY) {
                posx = e.pageX;
                posy = e.pageY;
            } else if (e.clientX || e.clientY) {
                posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }

            target.x = posx;
            target.y = posy;
            // console.log(posx,posy);
        }

        function scrollCheck() {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            animateHeader = document.body.scrollTop > height ? false : true;
        }



        function initAnimation() {
            animate();
            for (const i in points) {
                shiftPoint(points[i]);
            }
        }

        function animate() {
            if (animateHeader) {
                ctx.clearRect(0, 0, width, height);
                for (const i in points) {
                    if (Math.abs(getDistance(target, points[i])) < 4000) {
                        points[i].active = 0.3;
                        points[i].circle.active = 0.6;
                    } else if (Math.abs(getDistance(target, points[i])) < 20000) {
                        points[i].active = 0.1;
                        points[i].circle.active = 0.3;
                    } else if (Math.abs(getDistance(target, points[i])) < 40000) {
                        points[i].active = 0.02;
                        points[i].circle.active = 0.1;
                    } else {
                        points[i].active = 0;
                        points[i].circle.active = 0;
                    }

                    drawLines(points[i]);
                    points[i].circle.draw();
                }
            }
            requestAnimationFrame(animate);
        }

        function shiftPoint(p) {
            TweenLite.to(p, 1 + 1 * Math.random(), {
                x: p.originX - 50 + Math.random() * 100,
                y: p.originY - 50 + Math.random() * 100,
                ease: Circ.easeInOut,
                onComplete: function () {
                    shiftPoint(p);
                }
            });
        }

        function drawLines(p) {
            if (!p.active) return;
            for (const i in p.closest) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.closest[i].x, p.closest[i].y);
                ctx.strokeStyle = 'rgba(4, 42, 84,' + p.active + ')';
                ctx.stroke();
            }
        }

        function getDistance(p1, p2) {
            return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
        }

        initHeader();
        initAnimation();
        addListeners();
        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('scroll', scrollCheck);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
            <canvas
                    ref={canvasRef}
                    style={{
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -2,
                    }}
                    id="demo-canvas"
                ></canvas>

 
    );
}

export default AnimatedHeader;
