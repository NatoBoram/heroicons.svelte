<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HeartSvelte from '../../../lib/24/solid/heart.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: HeartSvelte,
		args: { class: '' },
	})
</script>

<Story name="Heart" />
