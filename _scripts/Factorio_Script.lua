/c 
	for chunk in game.surfaces[1].get_chunks() do 
		if game.player.force.is_chunk_charted(1, {chunk.x,chunk.y}) then
			game.take_screenshot{show_entity_info=true,zoom=1, resolution={1024,1024}, position={x=32*chunk.x+16,y=32*chunk.y+16}, path="map_26_July_2018_2030/s_"..chunk.x.."_"..chunk.y..".jpg"}; 
		end
	end