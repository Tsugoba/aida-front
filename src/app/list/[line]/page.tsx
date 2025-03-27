import { ListBreak } from '@/modules/list/ui/components/ListBreak/ListBreak';

export default async function ListPage({
  params,
}: {
  readonly params: Promise<{ line: string }>;
}) {
  const { line } = await params;
  return (
    <>
      <ListBreak line={line} />
    </>
  );
}
