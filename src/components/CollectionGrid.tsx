import {
  FiEdit2,
  FiEye,
  FiInbox,
  FiLink,
  FiTrash2,
} from 'react-icons/fi';
import { BiExport } from 'react-icons/bi';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

interface CollectionGridProps {
  collections: string[];
  handleEdit: (url: string, index: number) => void;
  handleDelete: (index: number) => void;
  handleCopyUrl: (url: string) => void;
  handleExport: (url: string) => void;
}

const CollectionGrid = ({
  collections,
  handleEdit,
  handleDelete,
  handleCopyUrl,
  handleExport,
}: CollectionGridProps) => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-2">📦 My Collection</h2>
      {collections.length === 0 ? (
        <div className="flex flex-col gap-8 items-center text-muted-foreground m-16">
          <p className="text-lg">
            Your collection is empty. Create and add unique avatars here!
          </p>
          <FiInbox className="w-12 h-12 opacity-50" />
        </div>
      ) : (
        <div className="mb-8" />
      )}

      {collections.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, idx) => (
            <Dialog key={idx}>
              <Card className="group relative overflow-hidden transition-all hover:shadow-xl border-2">
                <CardContent className="p-4 bg-muted/20 flex items-center justify-center h-[400px] relative">
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      src={collection}
                      alt={`Collection ${idx}`}
                      className="w-full h-full object-contain transition-transform group-hover:scale-105"
                    />
                  </div>

                  {/* Hover Overlay - Only Eye Button */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                    <DialogTrigger asChild>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full w-12 h-12 hover:scale-110 hover:bg-white hover:text-black transition-all"
                        title="View"
                      >
                        <FiEye className="w-6 h-6" />
                      </Button>
                    </DialogTrigger>
                  </div>
                </CardContent>
                <div className="border-t" />
                <CardFooter className="p-4 flex justify-between gap-2 bg-muted/10">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(collection, idx);
                    }}
                    title="Edit"
                  >
                    <FiEdit2 className="w-5 h-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleExport(collection);
                    }}
                    title="Download PNG"
                  >
                    <BiExport className="w-5 h-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopyUrl(collection);
                    }}
                    title="Copy URL"
                  >
                    <FiLink className="w-5 h-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="destructive"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(idx);
                    }}
                    title="Delete"
                  >
                    <FiTrash2 className="w-5 h-5" />
                  </Button>
                </CardFooter>
              </Card>
              <DialogContent className="max-w-[800px] w-full bg-white dark:bg-zinc-950 p-0 overflow-hidden">
                <div className="p-10 flex items-center justify-center bg-muted/20 min-h-[500px]">
                  <img
                    src={collection}
                    className="w-full h-full object-contain max-h-[70vh]"
                    alt="Full view"
                  />
                </div>
                <div className="p-6 flex justify-end gap-3 bg-background border-t">
                  <DialogClose asChild>
                    <Button
                      variant="outline"
                      onClick={() => handleEdit(collection, idx)}
                    >
                      <FiEdit2 className="mr-2 h-4 w-4" /> Edit
                    </Button>
                  </DialogClose>
                  <Button onClick={() => handleExport(collection)}>
                    <BiExport className="mr-2 h-4 w-4" /> Download
                  </Button>
                  <DialogClose asChild>
                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(idx)}
                    >
                      <FiTrash2 className="mr-2 h-4 w-4" /> Delete
                    </Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionGrid;
