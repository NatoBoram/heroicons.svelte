<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HandThumbUpSvelte from '../../../lib/24/solid/hand-thumb-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: HandThumbUpSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="HandThumbUp" />
