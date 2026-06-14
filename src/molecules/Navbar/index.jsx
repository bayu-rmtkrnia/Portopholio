import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const Navbar = () => {
  const navItems = [
    {
      name : 'Home',
      id: '#/',
    },
    {
      name: 'About',
      id: '#about'
    },
    {
      name: 'Projects',
      id: '#projects'
    },
    {
      name: 'Experience',
      id: '#experience'
    },
  ];

  const navRef = useRef(null);

  useEffect(() => {
    // Animasi: Dari atas (y: -100) & ukuran 2x membesar
    // Ke: posisi asli (y: 0) & ukuran normal 1x
    // Delay 0.2s, durasi 1.2s agar smooth (power3.out)
    gsap.fromTo(
      navRef.current,
      { y: -100, scale: 2, opacity: 0 },
      { 
        y: 0, 
        scale: 1, 
        opacity: 1, 
        duration: 1.8, 
        delay: 0.2, 
        ease: "power3.out" 
      }
    );
  }, []);
  
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.15,
      fontWeight: 800,
      textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)", // Bright glow
      color: "#f1f1f1", // Change to a brighter color on hover
      duration: 0.5,
      ease: "elastic.out(1, 0.4)" // Smooth and cartoony bounce
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      fontWeight: 500, // Reset to original
      textShadow: "0px 0px 0px rgba(255, 255, 255, 0)",
      color: "", // Reset to CSS default
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    const targetId = id === '#/' ? '/' : id.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, autoKill: false },
        ease: 'power3.inOut'
      });
    }
  };
  
  return (
    <nav 
      ref={navRef}
      className="w-[50%] h-10 mx-auto mt-4 sm:flex hidden rounded-lg border-[#ffff] bg-[#e9e9e9]/25 shadow-md shadow-[#577BC1]/55 backdrop-blur-xs border items-center z-10 sticky top-4 py-4"
    >
      <ul className="w-full sm:flex hidden justify-around items-center text-sm">
        {navItems.map((item) => {
          return(
            <li key={item.name} className="flex justify-center items-center w-20 text-center">
              <a 
                href={item.id}
                onClick={(e) => handleClick(e, item.id)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="inline-block"
                style={{ transformOrigin: "center" }}
              >
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
// import { useEffect, useRef, useState } from 'react';
// // import { Link } from 'react-dom'; // Fix: react-dom does not export Link
// const Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;
// import { gsap } from 'gsap';
// import './PillNav.css';

// const PillNav = ({
//   logo,
//   logoAlt = 'Logo',
//   items,
//   activeHref,
//   className = '',
//   ease = 'power3.easeOut',
//   baseColor = '#fff',
//   pillColor = '#120F17',
//   hoveredPillTextColor = '#120F17',
//   pillTextColor,
//   onMobileMenuClick,
//   initialLoadAnimation = true
// }) => {
//   const resolvedPillTextColor = pillTextColor ?? baseColor;
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const circleRefs = useRef([]);
//   const tlRefs = useRef([]);
//   const activeTweenRefs = useRef([]);
//   const logoImgRef = useRef(null);
//   const logoTweenRef = useRef(null);
//   const hamburgerRef = useRef(null);
//   const mobileMenuRef = useRef(null);
//   const navItemsRef = useRef(null);
//   const logoRef = useRef(null);

//   useEffect(() => {
//     const layout = () => {
//       circleRefs.current.forEach(circle => {
//         if (!circle?.parentElement) return;

//         const pill = circle.parentElement;
//         const rect = pill.getBoundingClientRect();
//         const { width: w, height: h } = rect;
//         const R = ((w * w) / 4 + h * h) / (2 * h);
//         const D = Math.ceil(2 * R) + 2;
//         const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
//         const originY = D - delta;

//         circle.style.width = `${D}px`;
//         circle.style.height = `${D}px`;
//         circle.style.bottom = `-${delta}px`;

//         gsap.set(circle, {
//           xPercent: -50,
//           scale: 0,
//           transformOrigin: `50% ${originY}px`
//         });

//         const label = pill.querySelector('.pill-label');
//         const white = pill.querySelector('.pill-label-hover');

//         if (label) gsap.set(label, { y: 0 });
//         if (white) gsap.set(white, { y: h + 12, opacity: 0 });

//         const index = circleRefs.current.indexOf(circle);
//         if (index === -1) return;

//         tlRefs.current[index]?.kill();
//         const tl = gsap.timeline({ paused: true });

//         tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

//         if (label) {
//           tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
//         }

//         if (white) {
//           gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
//           tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
//         }

//         tlRefs.current[index] = tl;
//       });
//     };

//     layout();

//     const onResize = () => layout();
//     window.addEventListener('resize', onResize);

//     if (document.fonts?.ready) {
//       document.fonts.ready.then(layout).catch(() => {});
//     }

//     const menu = mobileMenuRef.current;
//     if (menu) {
//       gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1 });
//     }

//     if (initialLoadAnimation) {
//       const logo = logoRef.current;
//       const navItems = navItemsRef.current;

//       if (logo) {
//         gsap.set(logo, { scale: 0 });
//         gsap.to(logo, {
//           scale: 1,
//           duration: 0.6,
//           ease
//         });
//       }

//       if (navItems) {
//         gsap.set(navItems, { width: 0, overflow: 'hidden' });
//         gsap.to(navItems, {
//           width: 'auto',
//           duration: 0.6,
//           ease
//         });
//       }
//     }

//     return () => window.removeEventListener('resize', onResize);
//   }, [items, ease, initialLoadAnimation]);

//   const handleEnter = i => {
//     const tl = tlRefs.current[i];
//     if (!tl) return;
//     activeTweenRefs.current[i]?.kill();
//     activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
//       duration: 0.3,
//       ease,
//       overwrite: 'auto'
//     });
//   };

//   const handleLeave = i => {
//     const tl = tlRefs.current[i];
//     if (!tl) return;
//     activeTweenRefs.current[i]?.kill();
//     activeTweenRefs.current[i] = tl.tweenTo(0, {
//       duration: 0.2,
//       ease,
//       overwrite: 'auto'
//     });
//   };

//   const handleLogoEnter = () => {
//     const img = logoImgRef.current;
//     if (!img) return;
//     logoTweenRef.current?.kill();
//     gsap.set(img, { rotate: 0 });
//     logoTweenRef.current = gsap.to(img, {
//       rotate: 360,
//       duration: 0.2,
//       ease,
//       overwrite: 'auto'
//     });
//   };

//   const toggleMobileMenu = () => {
//     const newState = !isMobileMenuOpen;
//     setIsMobileMenuOpen(newState);

//     const hamburger = hamburgerRef.current;
//     const menu = mobileMenuRef.current;

//     if (hamburger) {
//       const lines = hamburger.querySelectorAll('.hamburger-line');
//       if (newState) {
//         gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
//         gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
//       } else {
//         gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
//         gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
//       }
//     }

//     if (menu) {
//       if (newState) {
//         gsap.set(menu, { visibility: 'visible' });
//         gsap.fromTo(
//           menu,
//           { opacity: 0, y: 10, scaleY: 1 },
//           {
//             opacity: 1,
//             y: 0,
//             scaleY: 1,
//             duration: 0.3,
//             ease,
//             transformOrigin: 'top center'
//           }
//         );
//       } else {
//         gsap.to(menu, {
//           opacity: 0,
//           y: 10,
//           scaleY: 1,
//           duration: 0.2,
//           ease,
//           transformOrigin: 'top center',
//           onComplete: () => {
//             gsap.set(menu, { visibility: 'hidden' });
//           }
//         });
//       }
//     }

//     onMobileMenuClick?.();
//   };

//   const isExternalLink = href =>
//     href.startsWith('http://') ||
//     href.startsWith('https://') ||
//     href.startsWith('//') ||
//     href.startsWith('mailto:') ||
//     href.startsWith('tel:') ||
//     href.startsWith('#');

//   const isRouterLink = href => href && !isExternalLink(href);

//   const cssVars = {
//     ['--base']: baseColor,
//     ['--pill-bg']: pillColor,
//     ['--hover-text']: hoveredPillTextColor,
//     ['--pill-text']: resolvedPillTextColor
//   };

//   return (
//     <div className="pill-nav-container">
//       <nav className={`pill-nav ${className}`} aria-label="Primary" style={cssVars}>
//         {isRouterLink(items?.[0]?.href) ? (
//           <Link
//             className="pill-logo"
//             to={items[0].href}
//             aria-label="Home"
//             onMouseEnter={handleLogoEnter}
//             role="menuitem"
//             ref={el => {
//               logoRef.current = el;
//             }}
//           >
//             <img src={logo} alt={logoAlt} ref={logoImgRef} />
//           </Link>
//         ) : (
//           <a
//             className="pill-logo"
//             href={items?.[0]?.href || '#'}
//             aria-label="Home"
//             onMouseEnter={handleLogoEnter}
//             ref={el => {
//               logoRef.current = el;
//             }}
//           >
//             <img src={logo} alt={logoAlt} ref={logoImgRef} />
//           </a>
//         )}

//         <div className="pill-nav-items desktop-only" ref={navItemsRef}>
//           <ul className="pill-list" role="menubar">
//             {(items || []).map((item, i) => (
//               <li key={item.href || `item-${i}`} role="none">
//                 {isRouterLink(item.href) ? (
//                   <Link
//                     role="menuitem"
//                     to={item.href}
//                     className={`pill${activeHref === item.href ? ' is-active' : ''}`}
//                     aria-label={item.ariaLabel || item.label}
//                     onMouseEnter={() => handleEnter(i)}
//                     onMouseLeave={() => handleLeave(i)}
//                   >
//                     <span
//                       className="hover-circle"
//                       aria-hidden="true"
//                       ref={el => {
//                         circleRefs.current[i] = el;
//                       }}
//                     />
//                     <span className="label-stack">
//                       <span className="pill-label">{item.label}</span>
//                       <span className="pill-label-hover" aria-hidden="true">
//                         {item.label}
//                       </span>
//                     </span>
//                   </Link>
//                 ) : (
//                   <a
//                     role="menuitem"
//                     href={item.href}
//                     className={`pill${activeHref === item.href ? ' is-active' : ''}`}
//                     aria-label={item.ariaLabel || item.label}
//                     onMouseEnter={() => handleEnter(i)}
//                     onMouseLeave={() => handleLeave(i)}
//                   >
//                     <span
//                       className="hover-circle"
//                       aria-hidden="true"
//                       ref={el => {
//                         circleRefs.current[i] = el;
//                       }}
//                     />
//                     <span className="label-stack">
//                       <span className="pill-label">{item.label}</span>
//                       <span className="pill-label-hover" aria-hidden="true">
//                         {item.label}
//                       </span>
//                     </span>
//                   </a>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <button
//           className="mobile-menu-button mobile-only"
//           onClick={toggleMobileMenu}
//           aria-label="Toggle menu"
//           ref={hamburgerRef}
//         >
//           <span className="hamburger-line" />
//           <span className="hamburger-line" />
//         </button>
//       </nav>

//       <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef} style={cssVars}>
//         <ul className="mobile-menu-list">
//           {(items || []).map((item, i) => (
//             <li key={item.href || `mobile-item-${i}`}>
//               {isRouterLink(item.href) ? (
//                 <Link
//                   to={item.href}
//                   className={`mobile-menu-link${activeHref === item.href ? ' is-active' : ''}`}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ) : (
//                 <a
//                   href={item.href}
//                   className={`mobile-menu-link${activeHref === item.href ? ' is-active' : ''}`}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {item.label}
//                 </a>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default PillNav;
