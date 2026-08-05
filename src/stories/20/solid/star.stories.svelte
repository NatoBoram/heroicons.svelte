<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import StarSvelte from '../../../lib/20/solid/star.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: StarSvelte,
		args: { class: '' },
	})
</script>

<Story name="Star" />
