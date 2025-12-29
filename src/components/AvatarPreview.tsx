import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FiDownload, FiRefreshCw, FiTrash2 } from 'react-icons/fi';

interface AvatarPreviewProps {
  imageUrl: string;
  onRandomize: () => void;
  onReset: () => void;
  onUpdate: () => void;
  onAdd: () => void;
  isEditing: boolean;
  isDuplicate: boolean;
}

const AvatarPreview = memo(({
  imageUrl,
  onRandomize,
  onReset,
  onUpdate,
  onAdd,
  isEditing,
  isDuplicate,
}: AvatarPreviewProps) => {
  return (
    <div className="lg:col-span-4 flex flex-col gap-6">
      <Card className="overflow-hidden border-2">
        <CardContent className="p-0 bg-muted/20 flex items-center justify-center min-h-[400px]">
          <img
            src={imageUrl}
            alt="Avatar Preview"
            className="w-full h-auto max-w-[300px] object-contain"
          />
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={onRandomize}
          variant="outline"
          className="w-full flex gap-2"
        >
          <FiRefreshCw /> Randomize
        </Button>
        <Button
          onClick={onReset}
          variant="destructive"
          className="w-full flex gap-2"
        >
          <FiTrash2 /> Reset
        </Button>
      </div>
      {isEditing ? (
        <div className="flex gap-4">
          <Button
            onClick={onUpdate}
            size="lg"
            className="w-full flex gap-2 font-bold"
          >
            <FiRefreshCw /> Update
          </Button>
          <Button
            onClick={onAdd}
            size="lg"
            variant="secondary"
            className="w-full flex gap-2 font-bold"
            disabled={isDuplicate}
          >
            <FiDownload /> Add New
          </Button>
        </div>
      ) : (
        <Button
          onClick={onAdd}
          size="lg"
          className="w-full flex gap-2 font-bold"
          disabled={isDuplicate}
        >
          <FiDownload /> Add to Collection
        </Button>
      )}
    </div>
  );
});

AvatarPreview.displayName = 'AvatarPreview';

export default AvatarPreview;
