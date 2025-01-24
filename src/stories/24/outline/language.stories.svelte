<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LanguageSvelte from '../../../lib/24/outline/language.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: LanguageSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Language" />
