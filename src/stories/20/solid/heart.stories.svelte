<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HeartSvelte from '../../../lib/20/solid/heart.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: HeartSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Heart" />
