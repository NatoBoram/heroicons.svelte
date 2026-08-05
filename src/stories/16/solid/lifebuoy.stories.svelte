<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LifebuoySvelte from '../../../lib/16/solid/lifebuoy.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: LifebuoySvelte,
		args: { class: '' },
	})
</script>

<Story name="Lifebuoy" />
