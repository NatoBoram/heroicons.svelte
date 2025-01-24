<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HandThumbUpSvelte from '../../../lib/20/solid/hand-thumb-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: HandThumbUpSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="HandThumbUp" />
