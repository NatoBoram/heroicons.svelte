<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LanguageSvelte from '../../../lib/24/solid/language.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: LanguageSvelte,
		args: { class: '' },
	})
</script>

<Story name="Language" />
