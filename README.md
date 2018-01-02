# Demo of schematics rename/move issue

## Steps to reproduce

``` bash
# prepare the schematics package
(cd schematic && npm install)

# prepare the demo
cd demo
npm install

# test the rename or move schematics
schematics rename-test:rename
schematics rename-test:move
```
