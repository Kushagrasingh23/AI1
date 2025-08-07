import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function PostEditor({ onClose }: { onClose: () => void }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const dropRef = useRef<HTMLDivElement>(null);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...dropped]);
  };

  const onSubmit = () => {
    // Placeholder submit
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="neon-card p-6 w-full max-w-2xl">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Create Post</h2>
          <button onClick={onClose} className="text-white/60 hover:text-white">✕</button>
        </div>
        <div className="grid gap-3 mt-4">
          <input
            className="bg-white/5 border border-white/10 rounded px-3 py-2"
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="bg-white/5 border border-white/10 rounded px-3 py-2 min-h-[120px]"
            placeholder="Write something..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div
            ref={dropRef}
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            className="border border-dashed border-white/20 rounded p-6 text-center text-white/70"
          >
            Drag and drop images / short videos / GIFs here
          </div>
          {files.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
              {files.map((f, i) => (
                <div key={i} className="neon-card p-2 text-xs truncate">{f.name}</div>
              ))}
            </div>
          )}
          <button onClick={onSubmit} className="neon-button mt-2">Publish</button>
        </div>
      </motion.div>
    </div>
  );
}