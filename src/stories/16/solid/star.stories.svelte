<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import StarSvelte from '../../../lib/16/solid/star.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: StarSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Star" />
