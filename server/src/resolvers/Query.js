const link = async (parent, args, context, info) => {
  const link = await context.prisma.link.findUnique({
    where: { id: Number(args.id) },
  });
  return link;
};

const user = async (parent, args, context, info) => {
  const users = await context.prisma.user.findMany();
  return users;
};

const feed = async (parent, args, context, info) => {
  const where = args.filter
    ? {
        OR: [
          { description: { contains: args.filter } },
          { url: { contains: args.filter } },
        ],
      }
    : {};

  const links = await context.prisma.link.findMany({
    where,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy,
  });

  const count = await context.prisma.link.count({ where });

  return {
    links,
    count,
  };
};

module.exports = { feed, link, user };
