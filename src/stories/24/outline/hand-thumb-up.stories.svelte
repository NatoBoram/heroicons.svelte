<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HandThumbUpSvelte from '../../../lib/24/outline/hand-thumb-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: HandThumbUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="HandThumbUp" />
