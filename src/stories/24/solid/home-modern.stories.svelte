<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HomeModernSvelte from '../../../lib/24/solid/home-modern.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: HomeModernSvelte,
		args: { class: '' },
	})
</script>

<Story name="HomeModern" />
