<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HeartSvelte from '../../../lib/20/solid/heart.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: HeartSvelte,
		args: { class: '' },
	})
</script>

<Story name="Heart" />
