import { useEffect } from 'react';

interface VideoModalProps {
open: boolean;
onClose: () => void;
youtubeId: string;
}

const VideoModal = ({
open,
onClose,
youtubeId,
}: VideoModalProps) => {
// ESC close
useEffect(() => {
if (!open) return;

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    onClose();
  }
};

window.addEventListener('keydown', onKey);

return () =>
  window.removeEventListener('keydown', onKey);

}, [open, onClose]);

// Lock scroll
useEffect(() => {
if (!open) return;

const original = document.body.style.overflow;

document.body.style.overflow = 'hidden';

return () => {
  document.body.style.overflow = original;
};

}, [open]);

if (!open) return null;

return (
<div
role="dialog"
aria-modal="true"
aria-label="Introduction video"
onClick={onClose}
className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-xl p-4 sm:p-8"
style={{
animation: 'fadeIn 0.25s ease-out',
}}
>
<div
onClick={(e) => e.stopPropagation()}
className="relative w-full max-w-6xl"
>
{/* Close Button */} <button
       onClick={onClose}
       aria-label="Close video"
       className="absolute -top-14 right-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:scale-110"
     >
✕ </button>

    {/* Video Container */}
    <div
      className="relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-[0_0_40px_rgba(37,99,235,0.18)]"
      style={{
        paddingBottom: '56.25%',
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
        title="Introduction video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>

    {/* Bottom Label */}
    <div className="mt-5 flex items-center justify-between px-1">
      <span className="text-xs uppercase tracking-[0.3em] text-[#60A5FA]">
        Cloud • DevOps • Infrastructure
      </span>

      <span className="text-xs uppercase tracking-[0.3em] text-white/40">
        Sudharsan B
      </span>
    </div>
  </div>

  <style>{`
    @keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  `}</style>
</div>

);
};

export default VideoModal;
