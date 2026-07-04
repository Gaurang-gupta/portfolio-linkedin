interface BadgeGroupProps {
  children: React.ReactNode;
}

export function BadgeGroup({ children }: BadgeGroupProps) {
  return <div className="my-6 flex flex-wrap gap-2">{children}</div>;
}
