import { ReactElement } from 'react';
import Swiper, { SwiperOptions, SelectableElement, SwiperModule } from 'swiper';
export declare type ReactIdSwiperRenderProps = (props: ReactIdSwiperProps) => ReactElement | null;
export declare type WrappedElementType = 'div' | 'section' | 'span';
export declare type ReactIdSwiperChildren = ReactElement | ReactElement[];
export declare type GetSwiper = (swiper: SwiperInstance) => void;
export declare type SwiperModules = (SwiperModule & {
    name: string;
})[];
export interface ReactIdSwiperProps extends SwiperOptions {
    ContainerEl?: WrappedElementType;
    WrapperEl?: WrappedElementType;
    containerClass?: string;
    wrapperClass?: string;
    slideClass?: string;
    rebuildOnUpdate?: boolean;
    navWrapper?: boolean;
    shouldSwiperUpdate?: boolean;
    getSwiper?: GetSwiper;
    activeSlideKey?: string;
    renderScrollbar?: ReactIdSwiperRenderProps;
    renderPagination?: ReactIdSwiperRenderProps;
    renderPrevButton?: ReactIdSwiperRenderProps;
    renderNextButton?: ReactIdSwiperRenderProps;
    renderParallax?: ReactIdSwiperRenderProps;
    rtl?: string | undefined;
    children?: ReactIdSwiperChildren;
    parallaxEl?: {
        el: string;
        value: string;
    };
}
export interface ReactIdSwiperCustomProps extends ReactIdSwiperProps {
    modules?: SwiperModules;
    Swiper: typeof Swiper;
}
export declare type SelectableElement = SelectableElement | undefined;
export declare type SwiperInstance = Swiper | null;
export declare type SwiperModuleName = 'navigation' | 'pagination' | 'scrollbar' | 'autoplay' | 'parallax' | 'lazy' | 'effect-fade' | 'effect-coverflow' | 'effect-flip' | 'effect-cube' | 'zoom' | 'keyboard' | 'mousewheel' | 'virtual' | 'hash-navigation' | 'history' | 'controller' | 'a11y';
