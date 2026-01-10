import { PhotoSlider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { isImageViewerOpen, imageViewerImages, imageViewerIndex, hideImageViewer, imageViewerIndex as imageViewerIndexSignal } from '@/stores/ui';

export function ImageViewer() {
    return (
        <PhotoSlider
            images={imageViewerImages.value.map((item) => ({ src: item, key: item }))}
            visible={isImageViewerOpen.value}
            onClose={hideImageViewer}
            index={imageViewerIndex.value}
            onIndexChange={(index) => {
                imageViewerIndexSignal.value = index;
            }}
        />
    );
}
