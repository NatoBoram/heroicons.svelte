<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HandThumbUpSvelte from '../../../lib/16/solid/hand-thumb-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: HandThumbUpSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="HandThumbUp" />
