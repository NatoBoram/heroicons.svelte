<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import StarSvelte from '../../../lib/24/solid/star.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: StarSvelte,
		args: { class: '' },
	})
</script>

<Story name="Star" />
