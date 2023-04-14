// priority: 0
var drawerlist = [
    'storagedrawers:oak_full_drawers_1',
    'storagedrawers:oak_full_drawers_2',
    'storagedrawers:oak_full_drawers_4',
    'storagedrawers:oak_half_drawers_1',
    'storagedrawers:oak_half_drawers_2',
    'storagedrawers:oak_half_drawers_4',
    'storagedrawers:spruce_full_drawers_1',
    'storagedrawers:spruce_full_drawers_2',
    'storagedrawers:spruce_full_drawers_4',
    'storagedrawers:spruce_half_drawers_1',
    'storagedrawers:spruce_half_drawers_2',
    'storagedrawers:spruce_half_drawers_4',
    'storagedrawers:birch_full_drawers_1',
    'storagedrawers:birch_full_drawers_2',
    'storagedrawers:birch_full_drawers_4',
    'storagedrawers:birch_half_drawers_1',
    'storagedrawers:birch_half_drawers_2',
    'storagedrawers:birch_half_drawers_4',
    'storagedrawers:jungle_full_drawers_1',
    'storagedrawers:jungle_full_drawers_2',
    'storagedrawers:jungle_full_drawers_4',
    'storagedrawers:jungle_half_drawers_1',
    'storagedrawers:jungle_half_drawers_2',
    'storagedrawers:jungle_half_drawers_4',
    'storagedrawers:acacia_full_drawers_1',
    'storagedrawers:acacia_full_drawers_2',
    'storagedrawers:acacia_full_drawers_4',
    'storagedrawers:acacia_half_drawers_1',
    'storagedrawers:acacia_half_drawers_2',
    'storagedrawers:acacia_half_drawers_4',
    'storagedrawers:dark_oak_full_drawers_1',
    'storagedrawers:dark_oak_full_drawers_2',
    'storagedrawers:dark_oak_full_drawers_4',
    'storagedrawers:dark_oak_half_drawers_1',
    'storagedrawers:dark_oak_half_drawers_2',
    'storagedrawers:dark_oak_half_drawers_4',
    'storagedrawers:crimson_full_drawers_1',
    'storagedrawers:crimson_full_drawers_2',
    'storagedrawers:crimson_full_drawers_4',
    'storagedrawers:crimson_half_drawers_1',
    'storagedrawers:crimson_half_drawers_2',
    'storagedrawers:crimson_half_drawers_4',
    'storagedrawers:warped_full_drawers_1',
    'storagedrawers:warped_full_drawers_2',
    'storagedrawers:warped_full_drawers_4',
    'storagedrawers:warped_half_drawers_1',
    'storagedrawers:warped_half_drawers_2',
    'storagedrawers:warped_half_drawers_4',
    'storagedrawers:compacting_drawers_3'
    
];

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	event.create('example_item').displayName('Example Item')
  event.create('yamatooo').displayName('阎魔')
})

onEvent('block.registry', event => {
	//Register new blocks here
	event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

onEvent('block.modification', event => {
	event.modify(drawerlist, block => {
	  block.destroySpeed = 0.1
	})
})