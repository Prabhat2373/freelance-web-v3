# echo "Deployment starting..."

# # install dependencies if any
# yarn || exit

# # set build folder to `temp` and build
# BUILD_DIR=temp yarn build || exit

# if [ ! -d "temp" ]; then
#   echo '\033[31m temp directory does not exist!\033[0m'  
#   exit 1;
# fi

# # delete `.next` folder
# rm -rf .next

# # rename `temp` folder to `.next`
# mv temp .next

# # run next start
# next start

# echo "Deployment done."






echo "Deployment starting..."

# install dependencies if any
yarn || exit

# set build folder to `temp` and build
BUILD_DIR=temp yarn build || exit

if [ ! -d "temp" ]; then
  echo '\033[31m temp directory does not exist!\033[0m'  
  exit 1;
fi

# delete `.next` folder
rm -rf .next

# rename `temp` folder to `.next`
mv temp .next

# stop existing Next.js process if running
pkill -f "next start"

# run next start
next start &

echo "Deployment done."
